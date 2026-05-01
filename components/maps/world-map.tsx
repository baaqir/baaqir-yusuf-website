"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { select } from "d3-selection";
import { zoom, zoomIdentity, type ZoomBehavior } from "d3-zoom";
import "d3-transition";
import { countries as visitedCountries, type Country } from "@/content/travel";

type Topology = {
  type: "Topology";
  objects: { countries: { type: string; geometries: unknown[] } };
  arcs: number[][][];
  transform?: { scale: [number, number]; translate: [number, number] };
};

type CountryFeatureProps = { name: string };

const NAME_OVERRIDES: Record<string, string> = {
  "Dominican Republic": "Dominican Rep.",
  UAE: "United Arab Emirates",
  "United States": "United States of America",
};

const WIDTH = 960;
const HEIGHT = 500;

export function WorldMap() {
  const [topology, setTopology] = useState<Topology | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const zoomBehaviorRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/maps/world-110m.json")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setTopology(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.clientWidth);
    const ro = new ResizeObserver(() => setContainerWidth(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || !gRef.current || !topology) return;
    const svgEl = svgRef.current;
    const gEl = gRef.current;
    const svgSel = select(svgEl);
    const gSel = select(gEl);

    const zoomBehavior = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .translateExtent([
        [0, 0],
        [WIDTH, HEIGHT],
      ])
      .on("zoom", (event) => {
        gSel.attr("transform", event.transform.toString());
        setZoomLevel(event.transform.k);
      });

    zoomBehaviorRef.current = zoomBehavior;
    svgSel.call(zoomBehavior);

    return () => {
      svgSel.on(".zoom", null);
    };
  }, [topology]);

  const visitedByName = useMemo(() => {
    const map = new Map<string, Country>();
    for (const c of visitedCountries) {
      map.set(NAME_OVERRIDES[c.name] ?? c.name, c);
    }
    return map;
  }, []);

  const handleReset = () => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    select(svgRef.current)
      .transition()
      .duration(400)
      .call(zoomBehaviorRef.current.transform, zoomIdentity);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  if (!topology) {
    return (
      <div
        aria-hidden
        className="aspect-[2/1] rounded-md border border-dashed border-[color:var(--rule)] bg-[color:var(--paper-warm)]"
      />
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fcRaw = feature(topology as any, topology.objects.countries as any) as unknown as {
    type: "FeatureCollection";
    features: Array<{
      type: "Feature";
      properties: CountryFeatureProps;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      geometry: any;
      id?: string;
    }>;
  };

  // Filter out overseas-territory polygons that misrepresent visited countries.
  // (e.g. France's source geometry includes French Guiana in South America.)
  const fc = {
    ...fcRaw,
    features: fcRaw.features.map((f) => {
      if (
        f.properties?.name === "France" &&
        f.geometry?.type === "MultiPolygon"
      ) {
        const europeOnly = (f.geometry.coordinates as number[][][][]).filter(
          (polygon) => {
            const lats = polygon[0].map((pt) => pt[1]);
            const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
            return centerLat > 30;
          },
        );
        return {
          ...f,
          geometry: { ...f.geometry, coordinates: europeOnly },
        };
      }
      return f;
    }),
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projection = geoNaturalEarth1().fitSize([WIDTH, HEIGHT], fc as any);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pathGen = geoPath(projection as any);

  const hoveredCountry = hovered ? visitedByName.get(hovered) : null;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setHovered(null);
        setTooltipPos(null);
      }}
      className="relative cursor-grab active:cursor-grabbing"
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full select-none touch-none"
        role="img"
        aria-label="World map of countries I've visited"
      >
        <g ref={gRef}>
          {fc.features.map((f, i) => {
            const name = f.properties?.name ?? "";
            const isVisited = visitedByName.has(name);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const d = pathGen(f as any) ?? undefined;
            if (!d) return null;
            const isHover = hovered === name;
            const isDimmed = !!hovered && isVisited && !isHover;
            return (
              <path
                key={i}
                d={d}
                fill={isVisited ? "var(--accent)" : "var(--paper-warm)"}
                fillOpacity={isVisited ? (isDimmed ? 0.4 : 1) : 1}
                stroke={isHover ? "var(--ink)" : "var(--rule)"}
                strokeWidth={isHover ? 1 / zoomLevel : 0.5 / zoomLevel}
                style={{
                  transition: "fill-opacity 200ms ease-out, stroke 200ms ease-out",
                  cursor: isVisited ? "pointer" : "default",
                }}
                onMouseEnter={isVisited ? () => setHovered(name) : undefined}
                onMouseLeave={isVisited ? () => setHovered(null) : undefined}
              />
            );
          })}
        </g>
      </svg>

      {hoveredCountry && tooltipPos && (
        <div
          className="pointer-events-none absolute z-10 max-w-[14rem] rounded-md border border-[color:var(--rule)] bg-[color:var(--paper)] px-3 py-2 shadow-sm"
          style={{
            left: Math.min(tooltipPos.x + 14, Math.max(0, containerWidth - 240)),
            top: Math.max(0, tooltipPos.y - 8),
          }}
        >
          <div className="font-display text-sm">{hoveredCountry.name}</div>
          {hoveredCountry.cities ? (
            <div className="mt-0.5 font-serif text-xs text-ink/70">
              {hoveredCountry.cities}
            </div>
          ) : null}
        </div>
      )}

      <div className="absolute right-3 top-3 flex flex-col gap-1">
        <button
          type="button"
          onClick={handleReset}
          className="smallcaps rounded border border-[color:var(--rule)] bg-[color:var(--paper)]/90 px-2 py-1 text-[0.65rem] text-ink/70 hover:text-ink transition-colors"
          aria-label="Reset zoom"
        >
          Reset
        </button>
      </div>

      <div className="mt-3 smallcaps text-muted/70 text-[0.7rem]">
        Scroll to zoom · drag to pan · hover a country
      </div>
    </div>
  );
}
