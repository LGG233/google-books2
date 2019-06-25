import axios from "axios";
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

export default {
    getBooksByTitle: function (bookTitle) {
        return axios
            // .get("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + "&key=" + API_KEY)
            .get("http://localhost:3001/api/books?book=" + bookTitle);

    }
}

