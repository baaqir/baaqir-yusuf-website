export type Film = {
  title: string;
  year: string;
  director: string;
  genre?: string;
  note?: string;
  allTimer?: boolean;
  seriesCount?: number;
};

export const films: Film[] = [
  // Christopher Nolan
  { title: "Oppenheimer", year: "2023", director: "Christopher Nolan", genre: "Biopic / Drama" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan", genre: "Sci-fi", allTimer: true },
  { title: "Tenet", year: "2020", director: "Christopher Nolan", genre: "Sci-fi / Action" },
  { title: "The Dark Knight", year: "2008", director: "Christopher Nolan", genre: "Superhero / Crime", allTimer: true },
  { title: "The Dark Knight Rises", year: "2012", director: "Christopher Nolan", genre: "Superhero" },
  { title: "Inception", year: "2010", director: "Christopher Nolan", genre: "Sci-fi / Heist", allTimer: true },
  { title: "The Prestige", year: "2006", director: "Christopher Nolan", genre: "Mystery / Drama", allTimer: true },

  // Drama / awards-flavor
  { title: "Parasite", year: "2019", director: "Bong Joon-ho", genre: "Thriller / Drama", allTimer: true },
  { title: "Moonlight", year: "2016", director: "Barry Jenkins", genre: "Drama" },
  { title: "Get Out", year: "2017", director: "Jordan Peele", genre: "Horror / Thriller" },
  { title: "The Social Network", year: "2010", director: "David Fincher", genre: "Drama" },
  { title: "The Zone of Interest", year: "2023", director: "Jonathan Glazer", genre: "Drama / War" },
  { title: "Inglourious Basterds", year: "2009", director: "Quentin Tarantino", genre: "War / Drama" },
  { title: "The Wolf of Wall Street", year: "2013", director: "Martin Scorsese", genre: "Biopic / Comedy" },

  { title: "The Grand Budapest Hotel", year: "2014", director: "Wes Anderson", genre: "Comedy / Drama" },
  { title: "Past Lives", year: "2023", director: "Celine Song", genre: "Drama / Romance" },
  { title: "Anatomy of a Fall", year: "2023", director: "Justine Triet", genre: "Drama / Mystery" },
  { title: "Arrival", year: "2016", director: "Denis Villeneuve", genre: "Sci-fi / Drama" },
  { title: "The Departed", year: "2006", director: "Martin Scorsese", genre: "Crime / Thriller" },
  { title: "Moneyball", year: "2011", director: "Bennett Miller", genre: "Sports / Biopic" },
  { title: "Up", year: "2009", director: "Pete Docter", genre: "Animated" },
  { title: "Borat", year: "2006", director: "Larry Charles", genre: "Comedy" },
  { title: "Uncut Gems", year: "2019", director: "Safdie Brothers", genre: "Thriller / Crime" },
  { title: "Whiplash", year: "2014", director: "Damien Chazelle", genre: "Drama / Music" },

  { title: "Spotlight", year: "2015", director: "Tom McCarthy", genre: "Drama" },
  { title: "Everything Everywhere All at Once", year: "2022", director: "Daniels", genre: "Sci-fi / Comedy" },
  { title: "Black Panther", year: "2018", director: "Ryan Coogler", genre: "Superhero" },
  { title: "Superbad", year: "2007", director: "Greg Mottola", genre: "Comedy" },
  { title: "12 Angry Men", year: "1957", director: "Sidney Lumet", genre: "Drama / Courtroom" },
  { title: "Challengers", year: "2024", director: "Luca Guadagnino", genre: "Drama / Sports" },
  { title: "Marty Supreme", year: "2025", director: "Josh Safdie", genre: "Sports / Drama" },

  { title: "Avengers: Endgame", year: "2019", director: "Russo Brothers", genre: "Superhero" },
  { title: "Joker", year: "2019", director: "Todd Phillips", genre: "Drama / Thriller" },
  { title: "Soul", year: "2020", director: "Pete Docter", genre: "Animated" },
  { title: "Killers of the Flower Moon", year: "2023", director: "Martin Scorsese", genre: "Crime / Drama" },
  { title: "Spider-Man: Into the Spider-Verse", year: "2018", director: "Persichetti, Ramsey, Rothman", genre: "Animated / Superhero", allTimer: true },
  { title: "Barbie", year: "2023", director: "Greta Gerwig", genre: "Comedy" },

  { title: "Dune: Part One", year: "2021", director: "Denis Villeneuve", genre: "Sci-fi" },
  { title: "Dune: Part Two", year: "2024", director: "Denis Villeneuve", genre: "Sci-fi", allTimer: true },
  { title: "La La Land", year: "2016", director: "Damien Chazelle", genre: "Musical / Romance" },
  { title: "Shutter Island", year: "2010", director: "Martin Scorsese", genre: "Thriller" },
  { title: "Hitch", year: "2005", director: "Andy Tennant", genre: "Romantic Comedy" },
  { title: "Good Will Hunting", year: "1997", director: "Gus Van Sant", genre: "Drama", allTimer: true },
  { title: "Spider-Man", year: "2002", director: "Sam Raimi", genre: "Superhero" },

  { title: "Hereditary", year: "2018", director: "Ari Aster", genre: "Horror" },
  { title: "Us", year: "2019", director: "Jordan Peele", genre: "Horror" },
  { title: "Nope", year: "2022", director: "Jordan Peele", genre: "Horror / Sci-fi" },
  { title: "The Revenant", year: "2015", director: "Alejandro González Iñárritu", genre: "Drama / Survival" },
  { title: "Django Unchained", year: "2012", director: "Quentin Tarantino", genre: "Western" },
  { title: "Sinners", year: "2025", director: "Ryan Coogler", genre: "Horror / Thriller" },

  { title: "Catch Me If You Can", year: "2002", director: "Steven Spielberg", genre: "Biopic / Crime" },
  { title: "Blood Diamond", year: "2006", director: "Edward Zwick", genre: "Drama / Thriller" },
  { title: "King Richard", year: "2021", director: "Reinaldo Marcus Green", genre: "Biopic / Sports" },
  { title: "Zoolander", year: "2001", director: "Ben Stiller", genre: "Comedy" },
  { title: "The Fockers (1–3)", year: "2000–2010", director: "Jay Roach, Paul Weitz", genre: "Comedy", seriesCount: 3 },
  { title: "The Sandlot", year: "1993", director: "David Mickey Evans", genre: "Sports / Comedy" },
  { title: "Napoleon Dynamite", year: "2004", director: "Jared Hess", genre: "Comedy" },
  { title: "Project Hail Mary", year: "2026", director: "Phil Lord & Chris Miller", genre: "Sci-fi" },
  { title: "How to Lose a Guy in 10 Days", year: "2003", director: "Donald Petrie", genre: "Romantic Comedy" },

  { title: "Bugonia", year: "2025", director: "Yorgos Lanthimos", genre: "Sci-fi / Comedy" },
  { title: "Avatar (1 + 2)", year: "2009 / 2022", director: "James Cameron", genre: "Sci-fi / Adventure", seriesCount: 2 },
  { title: "One Battle After Another", year: "2025", director: "Paul Thomas Anderson", genre: "Action / Comedy", allTimer: true },
  { title: "Materialists", year: "2025", director: "Celine Song", genre: "Romance / Drama" },
  { title: "Eddington", year: "2025", director: "Ari Aster", genre: "Drama / Western" },
  { title: "Deadpool & Wolverine", year: "2024", director: "Shawn Levy", genre: "Superhero / Comedy" },
  { title: "A Complete Unknown", year: "2024", director: "James Mangold", genre: "Biopic / Music" },
  { title: "The Hunger Games (1–4)", year: "2012–2015", director: "Gary Ross, Francis Lawrence", genre: "Sci-fi / Dystopia", seriesCount: 4 },
  { title: "Wicked (1 + 2)", year: "2024 / 2025", director: "Jon M. Chu", genre: "Musical", seriesCount: 2 },
  { title: "Harry Potter (1–8)", year: "2001–2011", director: "Various", genre: "Fantasy", seriesCount: 8 },

  // Sports / underdog
  { title: "Rudy", year: "1993", director: "David Anspaugh", genre: "Sports / Drama" },
  { title: "Rocky", year: "1976", director: "John G. Avildsen", genre: "Sports / Drama" },
  { title: "The Karate Kid", year: "1984", director: "John G. Avildsen", genre: "Sports / Drama" },
  { title: "Warrior", year: "2011", director: "Gavin O'Connor", genre: "Sports / Drama" },

  { title: "Drive", year: "2011", director: "Nicolas Winding Refn", genre: "Crime / Thriller" },
  { title: "A Beautiful Mind", year: "2001", director: "Ron Howard", genre: "Biopic / Drama" },
  { title: "Awakenings", year: "1990", director: "Penny Marshall", genre: "Drama" },
  { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont", genre: "Drama", allTimer: true },
  { title: "The Silence of the Lambs", year: "1991", director: "Jonathan Demme", genre: "Thriller" },
  { title: "Hotel Rwanda", year: "2004", director: "Terry George", genre: "Drama" },
  { title: "Rain Man", year: "1988", director: "Barry Levinson", genre: "Drama" },
  { title: "Batman Begins", year: "2005", director: "Christopher Nolan", genre: "Superhero" },

  // Animated / family
  { title: "The Lion King", year: "1994", director: "Roger Allers, Rob Minkoff", genre: "Animated", allTimer: true },
  { title: "Finding Nemo", year: "2003", director: "Andrew Stanton", genre: "Animated" },
  { title: "Monsters, Inc.", year: "2001", director: "Pete Docter", genre: "Animated" },
  { title: "Toy Story", year: "1995", director: "John Lasseter", genre: "Animated" },
  { title: "The Jungle Book", year: "1967", director: "Wolfgang Reitherman", genre: "Animated" },
  { title: "The Emperor's New Groove", year: "2000", director: "Mark Dindal", genre: "Animated" },
  { title: "The Incredibles", year: "2004", director: "Brad Bird", genre: "Animated / Superhero" },
  { title: "Lilo & Stitch", year: "2002", director: "Chris Sanders, Dean DeBlois", genre: "Animated" },
  { title: "Ratatouille", year: "2007", director: "Brad Bird", genre: "Animated" },
  { title: "Bridge to Terabithia", year: "2007", director: "Gabor Csupo", genre: "Family / Drama" },
  { title: "WALL-E", year: "2008", director: "Andrew Stanton", genre: "Animated" },
  { title: "Sky High", year: "2005", director: "Mike Mitchell", genre: "Family / Superhero" },

  // Thriller / horror / late-night
  { title: "The Sixth Sense", year: "1999", director: "M. Night Shyamalan", genre: "Thriller" },
  { title: "The Covenant", year: "2023", director: "Guy Ritchie", genre: "Action / War" },
  { title: "Spider-Man: No Way Home", year: "2021", director: "Jon Watts", genre: "Superhero" },
  { title: "Nightcrawler", year: "2014", director: "Dan Gilroy", genre: "Crime / Thriller" },

  // Comedy
  { title: "The Hangover", year: "2009", director: "Todd Phillips", genre: "Comedy" },
  { title: "Home Alone", year: "1990", director: "Chris Columbus", genre: "Comedy / Family" },
  { title: "Ted", year: "2012", director: "Seth MacFarlane", genre: "Comedy" },

  // Horror
  { title: "Insidious", year: "2010", director: "James Wan", genre: "Horror" },
  { title: "The Shining", year: "1980", director: "Stanley Kubrick", genre: "Horror" },
  { title: "The Exorcist", year: "1973", director: "William Friedkin", genre: "Horror" },
  { title: "Paranormal Activity", year: "2007", director: "Oren Peli", genre: "Horror" },
];
