"use strict";
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const users = await response.json();
        console.log(users.length);
        users.forEach((user) => {
            console.log(`${user.name} - ${user.email}`);
        });
        const gwenUsers = users.find((user) => user.address.city === "Gwenborough");
        console.log(gwenUsers);
        const groupUsers = users.filter((user) => user.company.name.includes("Group"));
        console.log("Users at companies with 'Group':", groupUsers);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(`Things exploded (${err.message})`);
        }
    }
}
fetchUsers();
