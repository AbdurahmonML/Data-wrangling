async function fetchFilms() {
    const searchTerm = document.getElementById('search').value;
    const sortBy = document.getElementById('sort').value;
    const order = document.getElementById('order').value;

    const response = await fetch(`/api/films?search=${searchTerm}&sort=${sortBy}&order=${order}`);
    const films = await response.json();
    renderFilms(films);
}

function renderFilms(filmsArray) {
    const tbody = document.querySelector("#film-table tbody");
    tbody.innerHTML = "";

    filmsArray.forEach(film => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.year}</td>
            <td>${film.revenue}</td>
            <td>${film.country}</td>
        `;
        tbody.appendChild(row);
    });
}

function searchFilms() {
    fetchFilms();
}

function sortFilms() {
    fetchFilms();
}

document.addEventListener("DOMContentLoaded", function() {
    fetchFilms();
});
