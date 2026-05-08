async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        const users = await response.json();
        
        console.log(users.length);
        users.forEach((user: any) => {
            console.log(`${user.name} - ${user.email}`)
        });
        const gwenUsers = users.find((user: any) => user.address.city === "Gwenborough")
        console.log(gwenUsers);
        const groupUsers = users.filter((user: any) => user.company.name.includes("Group"));
        console.log("Users at companies with 'Group':", groupUsers);

        
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Things exploded (${err.message})`);
        }
    }
}

fetchUsers();