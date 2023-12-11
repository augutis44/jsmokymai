let books = [ 
    {
        title: "Knyga 1",
        author: "Petras Petrauskas",
        pages: 152
    }, 
    {
        title: "Knyga 2",
        author: "Petras Petrauskas",
        pages: 542
    },
    {
        title: "Knyga 3",
        author: "Mariuzas",
        pages: 21
    }
]

for (const book in books) {
    console.log(books[book]);
}

console.log(books[0]);

console.log(books[1].pages);
