const axios = require("axios");

module.exports = {
    getBooksByTitle: function (req, res) {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=jaws&key=" + APIKey, {
                params
            })
            .then(function (restuls) {
                res.json(results.data);

            });
    }
}
