const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const books = [
    { id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'Dune', author: 'Frank Herbert' },
    { id: 3, title: 'Foundation', author: 'Isaac Asimov' },
    { id: 4, title: 'The Man in The High Castle', author: 'Philip K Dick' },
    { id: 5, title: '1984', author: 'George Orwell' },
    { id: 6, title: 'Brave New World', author: 'Aldous Huxley' }
];

app.get('/books/search', (req, res) => {
    const author = req.query.author;
    const filteredBooks = books.filter((b) => b.author === author);

    return res.status(200).json({ books: filteredBooks });
})


app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find((book) => book.id === Number(id));

    if (!book) {
        return res.status(404).json({ message: 'Book not found!' })
    }

    return res.status(200).json(book);
})


app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {
    const token = req.headers.authorization;

    if (token !== 'super-senha')
        return res.status(401).json({ messa: 'tu NÃO PODE ACESSAR' })

    const { id, title, author } = req.body;
    books.push({ id, title, author });

    return res.status(201).json({ message: "Book created!" })
})

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const bookIndex = books.findIndex((b) => b.id === Number(id));

    if (bookIndex === -1)
        return res.status(404).send();

    books[bookIndex] = { id: Number(id), title, author };

    return res.status(204).end();

})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex((b) => b.id === Number(id));

    if (bookIndex === -1)
        return res.status(404).send();

    books.splice(bookIndex, 1)
    return res.status(204).send();

})


app.listen(3000, () => console.log("Minha primeira API na porta 3000"));