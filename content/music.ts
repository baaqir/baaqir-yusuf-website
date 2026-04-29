export type Playlist = {
  title: string;
  description?: string;
  embedUrl: string; // Spotify embed URL
  href?: string; // Direct link to open on Spotify
};

const embed = (id: string) =>
  `https://open.spotify.com/embed/playlist/${id}?utm_source=generator`;
const open = (id: string) => `https://open.spotify.com/playlist/${id}`;

export const playlists: Playlist[] = [
  {
    title: "House",
    embedUrl: embed("3ghr97RYGvBy4Ov53jSkWW"),
    href: open("3ghr97RYGvBy4Ov53jSkWW"),
  },
  {
    title: "Melodic house",
    embedUrl: embed("23IQwz8LbWqi4GuQbjTH1R"),
    href: open("23IQwz8LbWqi4GuQbjTH1R"),
  },
  {
    title: "Future bass",
    embedUrl: embed("4RKNx9gZmbDtohEpJ2qTXK"),
    href: open("4RKNx9gZmbDtohEpJ2qTXK"),
  },
  {
    title: "R&B",
    embedUrl: embed("2yIZK2ug12JszkmpTN1j3m"),
    href: open("2yIZK2ug12JszkmpTN1j3m"),
  },
  {
    title: "Soul",
    embedUrl: embed("7pl69ELkvoXzzxBKvWeV6E"),
    href: open("7pl69ELkvoXzzxBKvWeV6E"),
  },
  {
    title: "Focus",
    embedUrl: embed("1TbG3UBKV8jovYQ09UgjK7"),
    href: open("1TbG3UBKV8jovYQ09UgjK7"),
  },
  {
    title: "All-time",
    embedUrl: embed("306sDdP8m3XGWqAsOaPZ2E"),
    href: open("306sDdP8m3XGWqAsOaPZ2E"),
  },
  {
    title: "Rock",
    embedUrl: embed("1O85bSU4zhJwk5fExmwx1p"),
    href: open("1O85bSU4zhJwk5fExmwx1p"),
  },
  {
    title: "Chill hip-hop",
    embedUrl: embed("6SAOkHONisaf5oXtTQVhYz"),
    href: open("6SAOkHONisaf5oXtTQVhYz"),
  },
  {
    title: "Sad",
    embedUrl: embed("63XcZ2aSj8YIyfFkuh6kLa"),
    href: open("63XcZ2aSj8YIyfFkuh6kLa"),
  },
  {
    title: "Throwbacks",
    embedUrl: embed("2k0j0eNjX4cFTivjbkswAR"),
    href: open("2k0j0eNjX4cFTivjbkswAR"),
  },
  {
    title: "Español",
    embedUrl: embed("1aBPX1bvWLbWf49cDfTJbt"),
    href: open("1aBPX1bvWLbWf49cDfTJbt"),
  },
];
