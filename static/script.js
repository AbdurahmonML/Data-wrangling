// Function to fetch user data and render them
document.addEventListener("DOMContentLoaded", function () {
    async function fetchUsers() {
        try {
            const response = await fetch("static/users_data.json");
            const users = await response.json();
            renderUsers(users);
        } catch (error) {
            console.error("Error loading user data:", error);
        }
    }

    // Sample data stored in JavaScript
    const data = [
        { "name": "Alice", "age": 25, "city": "New York" },
        { "name": "Bob", "age": 30, "city": "Los Angeles" },
        { "name": "Charlie", "age": 22, "city": "Chicago" }
    ];

    // Function to render user data in the table
    function renderUsers(usersArray) {
        let tableBody = document.getElementById("data-table");
        tableBody.innerHTML = ""; // Clear previous content

        usersArray.forEach(user => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.city}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    // Render sample data initially
    renderUsers(data);

    // Fetch and render data from JSON file
    fetchUsers();
});
