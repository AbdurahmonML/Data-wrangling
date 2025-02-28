document.addEventListener("DOMContentLoaded", function () {
    fetch("static/films_data.json")
        .then(response => response.json())
        .then(films => {
            console.log(films);  // This will print the JSON data to the browser's console
            const tableBody = document.getElementById("film-table-body");
            tableBody.innerHTML = "";
            films.forEach(film => {
                const row = `<tr>
                    <td>${film.title}</td>
                    <td>${film.directors}</td>
                    <td>${film.year}</td>
                    <td>${film.revenue}</td>
                    <td>${film.country}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => {
            console.error("Error loading film data:", error);  // Logs any error if the file fails to load
        });
});
