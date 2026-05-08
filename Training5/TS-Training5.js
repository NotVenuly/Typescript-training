"use strict";
const products = [
    { name: "Laptop", price: 1200, category: "Electronics", inStock: true },
    { name: "Desk", price: 350, category: "Furniture", inStock: false },
    { name: "Mouse", price: 45, category: "Electronics", inStock: true },
    { name: "Chair", price: 280, category: "Furniture", inStock: true },
    { name: "Keyboard", price: 90, category: "Electronics", inStock: false },
    { name: "Lamp", price: 65, category: "Furniture", inStock: true },
    { name: "Monitor", price: 400, category: "Electronics", inStock: true },
];
console.log(products.filter((product) => product.inStock));
let names = [];
products.forEach(product => {
    console.log(`${product.name} costs: ${product.price} - ${product.category}`);
});
const firstFurn = products.find((product) => product.category === "Furniture");
console.log(firstFurn.name);
const filteredElec = products
    .filter((product) => product.category === "Electronics")
    .map((product) => product.name)
    .join(", ");
console.log("names: " + filteredElec);
