const Book = require('../models/Book')
getBooks = (req, res) => {
    const books = [
        new Book(1,'fajna ksiazka',2022, 'Serhii'),
        new Book(2,'prosto ksiazka',2021, 'Mariusz')
    ];
    res.send(books);
};
module.exports = {
    getBooks: getBooks,
}