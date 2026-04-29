// Fetches movie posters from TMDB and writes them to content/posters.json.
// Usage: node scripts/fetch-posters.mjs
//
// Reads TMDB_API_KEY from .env.local. Reads films from content/movies.ts
// (parsed via regex). Writes a { title: posterUrl } map to content/posters.json.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, ".env.local");
const MOVIES_PATH = path.join(ROOT, "content", "movies.ts");
const OUT_PATH = path.join(ROOT, "content", "posters.json");

const env = fs.readFileSync(ENV_PATH, "utf8");
const KEY = env.match(/TMDB_API_KEY\s*=\s*(.+)/)?.[1]?.trim();
if (!KEY) {
  console.error("TMDB_API_KEY not found in .env.local");
  process.exit(1);
}

const moviesText = fs.readFileSync(MOVIES_PATH, "utf8");
const filmRegex = /title:\s*"([^"]+)"[^}]*?year:\s*"([^"]+)"/g;
const films = [...moviesText.matchAll(filmRegex)].map((m) => ({
  title: m[1],
  year: m[2],
}));

console.log(`Found ${films.length} films`);

// For series titles, override the search query to find a real TMDB entry.
const QUERY_OVERRIDES = {
  "The Fockers (1–3)": { query: "Meet the Parents", year: "2000" },
  "Avatar (1 + 2)": { query: "Avatar", year: "2009" },
  "The Hunger Games (1–4)": { query: "The Hunger Games", year: "2012" },
  "Wicked (1 + 2)": { query: "Wicked", year: "2024" },
  // TMDB stores WALL-E with a middle-dot character; query with that.
  "WALL-E": { query: "WALL·E", year: "2008" },
  "Harry Potter (1–8)": { query: "Harry Potter and the Sorcerer's Stone", year: "2001" },
};

function stripSuffix(s) {
  return s.replace(/\s*\([^)]*\)\s*$/, "").trim();
}

function firstYear(y) {
  return y.match(/\d{4}/)?.[0];
}

async function fetchPoster(film) {
  const override = QUERY_OVERRIDES[film.title];
  const query = override?.query ?? stripSuffix(film.title);
  const year = override?.year ?? firstYear(film.year);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${encodeURIComponent(
    query,
  )}${year ? `&year=${year}` : ""}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`HTTP ${res.status} for ${film.title}`);
    return null;
  }
  const data = await res.json();
  return data.results?.[0]?.poster_path ?? null;
}

const out = {};
let hits = 0;
for (const film of films) {
  const posterPath = await fetchPoster(film);
  if (posterPath) {
    out[film.title] = `https://image.tmdb.org/t/p/w500${posterPath}`;
    console.log(`  ${film.title}`);
    hits++;
  } else {
    console.log(`  miss: ${film.title} (${film.year})`);
  }
  await new Promise((r) => setTimeout(r, 60));
}

fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + "\n");
console.log(`\nWrote ${hits}/${films.length} posters to ${path.relative(ROOT, OUT_PATH)}`);
