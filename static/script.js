document.addEventListener("DOMContentLoaded", function () {
    fetch("data/data.json")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById("data-table");
            data.forEach(user => {
                let row = `<tr>
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.city}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Error loading JSON data:", error));
});
