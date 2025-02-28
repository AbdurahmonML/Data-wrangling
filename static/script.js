const data = [
    { "name": "Alice", "age": 25, "city": "New York" },
    { "name": "Bob", "age": 30, "city": "Los Angeles" },
    { "name": "Charlie", "age": 22, "city": "Chicago" }
];

document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.getElementById("data-table");
    data.forEach(user => {
        let row = `<tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});
