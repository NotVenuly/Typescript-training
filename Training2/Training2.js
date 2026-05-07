"use strict";
const books = [
    { title: "IT", author: "Stephen speilberg", pages: 300, rating: 4 },
    { title: "Hamilton", author: "Alexander Hamilton", pages: 150 },
    { title: "To kill a mocking bird", author: "God knows Who", pages: 200, rating: 5 }
];
books.forEach(book => {
    if (book.rating != null) {
        console.log(`${book.title} by ${book.author} - Pages: ${book.pages} - ${book.rating}/10`);
    }
    else {
        console.log(`${book.title} by ${book.author} - Pages: ${book.pages} - Not yet rated`);
    }
});
