// Hardcoded film data
const films = [
    {
        "title": "Jurassic Park",
        "directors": "Steven Spielberg",
        "year": 1993,
        "revenue": 1037535230,
        "country": "United States"
    },
    {
        "title": "Titanic",
        "directors": "James Cameron",
        "year": 1997,
        "revenue": 2257844554,
        "country": "United States"
    },
    {
        "title": "Star Wars: Episode I – The Phantom Menace",
        "directors": "George Lucas",
        "year": 1999,
        "revenue": 1046515409,
        "country": "United States"
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "directors": "Peter Jackson",
        "year": 2003,
        "revenue": 1147997407,
        "country": "New Zealand"
    },
    {
        "title": "Pirates of the Caribbean: Dead Man's Chest",
        "directors": "Gore Verbinski",
        "year": 2006,
        "revenue": 1066179747,
        "country": "United States"
    },
    {
        "title": "Avatar",
        "directors": "James Cameron",
        "year": 2009,
        "revenue": 2923706026,
        "country": "United Kingdom"
    },
    {
        "title": "Toy Story 3",
        "directors": "Lee Unkrich",
        "year": 2010,
        "revenue": 1066970811,
        "country": "United States"
    },
    {
        "title": "Harry Potter and the Deathly Hallows – Part 2",
        "directors": "David Yates",
        "year": 2011,
        "revenue": 1342139727,
        "country": "United Kingdom"
    },
    {
        "title": "Transformers: Dark of the Moon",
        "directors": "Michael Bay",
        "year": 2011,
        "revenue": 1123794079,
        "country": "United States"
    },
    {
        "title": "Pirates of the Caribbean: On Stranger Tides",
        "directors": "Rob Marshall",
        "year": 2011,
        "revenue": 1045713802,
        "country": "United States"
    },
    {
        "title": "The Avengers",
        "directors": "Joss Whedon",
        "year": 2012,
        "revenue": 1518815515,
        "country": "United States"
    },
    {
        "title": "Skyfall",
        "directors": "Sam Mendes",
        "year": 2012,
        "revenue": 1108594137,
        "country": "United Kingdom"
    },
    {
        "title": "The Dark Knight Rises",
        "directors": "Christopher Nolan",
        "year": 2012,
        "revenue": 1081169825,
        "country": "United States"
    },
    {
        "title": "Frozen",
        "directors": "Chris Buck Jennifer Lee",
        "year": 2013,
        "revenue": 1290000000,
        "country": "United States"
    },
    {
        "title": "Iron Man 3",
        "directors": "Shane Black",
        "year": 2013,
        "revenue": 1214811252,
        "country": "United States"
    },
    {
        "title": "Transformers: Age of Extinction",
        "directors": "Michael Bay",
        "year": 2014,
        "revenue": 1104054072,
        "country": "United States"
    },
    {
        "title": "Star Wars: The Force Awakens",
        "directors": "J. J. Abrams",
        "year": 2015,
        "revenue": 2068223624,
        "country": "United States"
    },
    {
        "title": "Jurassic World",
        "directors": "Colin Trevorrow",
        "year": 2015,
        "revenue": 1671537444,
        "country": "United States"
    },
    {
        "title": "Furious 7",
        "directors": "James Wan",
        "year": 2015,
        "revenue": 1515341399,
        "country": "United States"
    },
    {
        "title": "Avengers: Age of Ultron",
        "directors": "Joss Whedon",
        "year": 2015,
        "revenue": 1402809540,
        "country": "United States"
    },
    {
        "title": "Minions",
        "directors": "Pierre Coffin Kyle Balda",
        "year": 2015,
        "revenue": 1159444662,
        "country": "United States"
    },
    {
        "title": "Captain America: Civil War",
        "directors": "Anthony Russo Joe Russo",
        "year": 2016,
        "revenue": 1153337496,
        "country": "United States"
    },
    {
        "title": "Rogue One: A Star Wars Story",
        "directors": "Gareth Edwards",
        "year": 2016,
        "revenue": 1057420387,
        "country": "United States"
    },
    {
        "title": "Star Wars: The Last Jedi",
        "directors": "Rian Johnson",
        "year": 2017,
        "revenue": 1332539889,
        "country": "United States"
    },
    {
        "title": "Beauty and the Beast",
        "directors": "Bill Condon",
        "year": 2017,
        "revenue": 1263521126,
        "country": "United States"
    },
    {
        "title": "The Fate of the Furious",
        "directors": "F. Gary Gray",
        "year": 2017,
        "revenue": 81238764765,
        "country": "United States"
    },
    {
        "title": "Despicable Me 3",
        "directors": "Pierre Coffin Kyle Balda",
        "year": 2017,
        "revenue": 1034800131,
        "country": "United States"
    },
    {
        "title": "Avengers: Infinity War",
        "directors": "Anthony Russo Joe Russo",
        "year": 2018,
        "revenue": 2048359754,
        "country": "United States"
    },
    {
        "title": "Black Panther",
        "directors": "Ryan Coogler",
        "year": 2018,
        "revenue": 1347280838,
        "country": "United States"
    },
    {
        "title": "Jurassic World: Fallen Kingdom",
        "directors": "J. A. Bayona",
        "year": 2018,
        "revenue": 1308473425,
        "country": "China"
    },
    {
        "title": "Incredibles 2",
        "directors": "Brad Bird",
        "year": 2018,
        "revenue": 1242805359,
        "country": "United States"
    },
    {
        "title": "Aquaman",
        "directors": "James Wan",
        "year": 2018,
        "revenue": 1148528393,
        "country": "United States"
    },
    {
        "title": "Avengers: Endgame",
        "directors": "Anthony Russo Joe Russo",
        "year": 2019,
        "revenue": 2797501328,
        "country": "United States"
    },
    {
        "title": "The Lion King",
        "directors": "Jon Favreau",
        "year": 2019,
        "revenue": 1656943394,
        "country": "United States"
    },
    {
        "title": "Frozen 2",
        "directors": "Chris Buck Jennifer Lee",
        "year": 2019,
        "revenue": 1450026933,
        "country": "United States"
    },
    {
        "title": "Spider-Man: Far From Home",
        "directors": "Jon Watts",
        "year": 2019,
        "revenue": 1132679685,
        "country": "United States"
    },
    {
        "title": "Captain Marvel",
        "directors": "Anna Boden Ryan Fleck",
        "year": 2019,
        "revenue": 1128274794,
        "country": "United States"
    },
    {
        "title": "Joker",
        "directors": "Todd Phillips",
        "year": 2019,
        "revenue": 1074458282,
        "country": "United States"
    },
    {
        "title": "Star Wars: The Rise of Skywalker",
        "directors": "J. J. Abrams",
        "year": 2019,
        "revenue": 1074144248,
        "country": "United States"
    },
    {
        "title": "Toy Story 4",
        "directors": "Josh Cooley",
        "year": 2019,
        "revenue": 1073394593,
        "country": "United States"
    },
    {
        "title": "Aladdin",
        "directors": "Guy Ritchie",
        "year": 2019,
        "revenue": 1050693953,
        "country": "United States"
    },
    {
        "title": "Spider-Man: No Way Home",
        "directors": "Jon Watts",
        "year": 2021,
        "revenue": 1922598800,
        "country": "United States"
    },
    {
        "title": "Avatar: The Way of Water",
        "directors": "James Cameron",
        "year": 2022,
        "revenue": 2320250281,
        "country": "United States"
    },
    {
        "title": "Top Gun: Maverick",
        "directors": "Joseph Kosinski",
        "year": 2022,
        "revenue": 1495696292,
        "country": "United States"
    },
    {
        "title": "Barbie",
        "directors": "Greta Gerwig",
        "year": 2023,
        "revenue": 1447038421,
        "country": "United States"
    },
    {
        "title": "The Super Mario Bros. Movie",
        "directors": "Aaron Horvath Michael Jelenic",
        "year": 2023,
        "revenue": 1362566989,
        "country": "United States"
    },
    {
        "title": "Inside Out 2",
        "directors": "Kelsey Mann",
        "year": 2024,
        "revenue": 1698863816,
        "country": "United States"
    },
    {
        "title": "Deadpool & Wolverine",
        "directors": "Shawn Levy",
        "year": 2024,
        "revenue": 1338073645,
        "country": "United States"
    },
    {
        "title": "Moana 2",
        "directors": "David Derrick Jr.[1]Jason Hand[1]Dana Ledoux Miller[1]",
        "year": 2024,
        "revenue": 1053502480,
        "country": "United States"
    },
    {
        "title": "Ne Zha 2",
        "directors": "Jiaozi",
        "year": 2025,
        "revenue": 1940794560,
        "country": "China"
    }
];

// Function to render films in the table
function renderFilms(filmsArray) {
    const tbody = document.querySelector("#film-table tbody");
    tbody.innerHTML = ""; // Clear existing rows

    filmsArray.forEach(film => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.directors}</td>
            <td>${film.year}</td>
            <td>${film.revenue.toLocaleString()}</td>
            <td>${film.country}</td>
        `;
        tbody.appendChild(row);
    });
}

// Function to filter films based on search input
function searchFilms() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredFilms = films.filter(film =>
        film.title.toLowerCase().includes(searchTerm)
    );
    renderFilms(filteredFilms);
}

// Function to sort films
function sortFilms() {
    const sortBy = document.getElementById('sort').value;
    const order = document.getElementById('order').value;

    let sortedFilms = [...films].sort((a, b) => {
        if (order === "asc") {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
    });

    renderFilms(sortedFilms);
}

// Initial render when page loads
document.addEventListener("DOMContentLoaded", function () {
    renderFilms(films);
});
