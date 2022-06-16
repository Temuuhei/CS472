/**
 * app.js
 */
"use strict";

console.log("Hello Typicode");

(async function() {
    const displayUsers = (users) => {
        console.log(users);
        const usersList = document.querySelector("#usersList");
        let strListItem = "";
        users.forEach(user => {
            strListItem += `<li>
                                ${user.name}
                            </li>`;
        });
        usersList.innerHTML = strListItem;
    }
    const displayError = (error) => {
        console.log(error);
    }
    // Fetch and display Users data from typicode
    // Option 1: Using Promises with .then(...).catch(...)
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(users => displayUsers(users))
    //     .catch(error => displayError(error));

    // Option 2: Using async-await
    async function getUsers() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const usersData = await response.json();
            return usersData;
        } catch(error) {
            displayError(error);
        }
    }
    const users = await getUsers();
    displayUsers(users);
})();