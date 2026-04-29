export type Photo = {
  src: string; // path under /public, e.g. "/photos/example.jpg"
  alt: string;
  caption?: string;
  location?: string;
  year?: string;
  width: number;
  height: number;
};

export const photos: Photo[] = [
  {
    src: "/photos/abu-dhabi-mosque.jpg",
    alt: "Sheikh Zayed Grand Mosque, dome detail",
    location: "Abu Dhabi, UAE",
    year: "2019",
    width: 2090,
    height: 2612,
  },
  {
    src: "/photos/abu-dhabi-desert.jpg",
    alt: "The desert outside Abu Dhabi",
    location: "Abu Dhabi, UAE",
    year: "2019",
    width: 3936,
    height: 2624,
  },
  {
    src: "/photos/tri06383.jpg",
    alt: "Sheikh Zayed Grand Mosque, domes",
    location: "Abu Dhabi, UAE",
    year: "2019",
    width: 3936,
    height: 2624,
  },
  {
    src: "/photos/thailand-phi-phi.jpg",
    alt: "Phi Phi Islands",
    location: "Phi Phi, Thailand",
    year: "2018",
    width: 4000,
    height: 6000,
  },
  {
    src: "/photos/franklin-street.jpg",
    alt: "Franklin Street",
    location: "Chapel Hill, NC",
    year: "2021",
    width: 3553,
    height: 4441,
  },
  {
    src: "/photos/odesza.png",
    alt: "ODESZA, live",
    location: "Raleigh, NC",
    year: "2018",
    width: 1237,
    height: 1729,
  },
  {
    src: "/photos/portrait-bw.jpg",
    alt: "ODESZA on stage",
    location: "Raleigh, NC",
    year: "2018",
    width: 2048,
    height: 1364,
  },
  {
    src: "/photos/dsc09212.jpg",
    alt: "Looking out from the Rock",
    location: "Gibraltar, UK",
    year: "2022",
    width: 2624,
    height: 3936,
  },
  {
    src: "/photos/dsc09318.jpg",
    alt: "The Rock of Gibraltar",
    location: "Gibraltar, UK",
    year: "2022",
    width: 2519,
    height: 3779,
  },
  {
    src: "/photos/dsc09649.jpg",
    alt: "Port and Strait",
    location: "Gibraltar, UK",
    year: "2022",
    width: 2303,
    height: 3454,
  },
  {
    src: "/photos/dsc09887.jpg",
    alt: "Barbary macaque",
    location: "Gibraltar, UK",
    year: "2022",
    width: 2624,
    height: 3936,
  },
  {
    src: "/photos/tri09730.jpg",
    alt: "Multnomah Falls",
    location: "Portland, OR",
    year: "2022",
    width: 2455,
    height: 3682,
  },
  {
    src: "/photos/asset-30.jpg",
    alt: "Two Oceans Aquarium",
    location: "Cape Town, South Africa",
    year: "2019",
    width: 1872,
    height: 1249,
  },
];
