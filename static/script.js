const data = [
    { "name": "Alice", "age": 25, "city": "New York" }
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
