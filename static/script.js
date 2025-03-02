// Hardcoded film data
const films = [
    { "title": "Titanic", "directors": "James Cameron", "year": 1997, "revenue": 2257844554, "country": "United States" },
    { "title": "Avatar", "directors": "James Cameron", "year": 2009, "revenue": 2923683000, "country": "United States" },
    { "title": "The Godfather", "directors": "Francis Ford Coppola", "year": 1972, "revenue": 287000000, "country": "United States" },
    { "title": "Inception", "directors": "Christopher Nolan", "year": 2010, "revenue": 836848102, "country": "United States" },
    { "title": "Interstellar", "directors": "Christopher Nolan", "year": 2014, "revenue": 773000000, "country": "United States" },
    { "title": "Parasite", "directors": "Bong Joon-ho", "year": 2019, "revenue": 263700000, "country": "South Korea" }
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

    document.getElementById("search-button").addEventListener("click", searchFilms);
    document.getElementById("sort").addEventListener("change", sortFilms);
    document.getElementById("order").addEventListener("change", sortFilms);
});
