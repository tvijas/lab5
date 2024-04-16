const Author = require('../models/Author');

getAuthors = (req, res) => {
    const authors = [
        new Author(1, "Serhii"),
        new Author(2, "John Doe"),
    ];
    res.send(authors)
};
module.exports = {
    getAuthors : getAuthors,
}