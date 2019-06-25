require('dotenv').config();
const axios = require("axios");
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

module.exports = {
    getBooksByTitle: function (req, res) {
        let query = req.query.book;
        console.log(API_KEY);
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + API_KEY)
            .then(function (results) {
                console.log(results.data);
                res.json(results.data.items);
            });
    }
}