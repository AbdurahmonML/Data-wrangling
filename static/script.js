// Sample data for films (used if API is unavailable)
const sampleFilms = [
    { "title": "Titanic", "directors": "James Cameron", "year": 1997, "revenue": 2257844554, "country": "United States" },
    { "title": "Avatar", "directors": "James Cameron", "year": 2009, "revenue": 2923683000, "country": "United States" }

// Function to fetch films from the backend API with search and sort parameters
async function fetchFilms() {
    const searchTerm = document.getElementById('search').value;
    const sortBy = document.getElementById('sort').value;
    const order = document.getElementById('order').value;

    try {
        const response = await fetch(`/api/films?search=${searchTerm}&sort=${sortBy}&order=${order}`);
        if (!response.ok) throw new Error("Failed to fetch films");
        const films = await response.json();
        renderFilms(films);
    } catch (error) {
        console.error("Error loading film data:", error);
        renderFilms(sampleFilms); // Use sample data if API fails
    }
}

// Function to render films in the table
function renderFilms(filmsArray) {
    const tbody = document.getElementById("film-table-body");
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

// Function to handle the search action
function searchFilms() {
    fetchFilms();
}

// Function to handle sorting change
function sortFilms() {
    fetchFilms();
}

// Initial render
document.addEventListener("DOMContentLoaded", fetchFilms);
