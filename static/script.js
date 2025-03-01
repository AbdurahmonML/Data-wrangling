// Function to fetch films from the JSON file and render them
async function fetchFilms() {
    try {
        const response = await fetch("static/films_data.json");
        const films = await response.json();
        const films = [
        { "title": "Titanic", "directors": "James Cameron", "year": 1997, "revenue": 2257844554, "country": "United States" },
        { "title": "Avatar", "directors": "James Cameron", "year": 2009, "revenue": 2923683000, "country": "United States" }
    ];
        renderFilms(films);
    } catch (error) {
        console.error("Error loading film data:", error);
    }
}

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
            <td>${film.revenue}</td>
            <td>${film.country}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initial fetch and render
document.addEventListener("DOMContentLoaded", fetchFilms);
