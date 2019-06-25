import React, { Component } from "react";
import API from "../util/API";
import Book from "../components/Book";
import './home.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            query: "",
            message: "Search for a book to begin!"
        }
        this.handleBookSave = this.handleBookSave.bind(this);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooksByTitle(this.state.query);
    }

    getBooksByTitle(query) {
        console.log(API.getBooksByTitle(query));
        API.getBooksByTitle(query)
            .then(results => {
                this.setState({
                    books: results.data
                })
                // console.log(results.data);
                console.log(this.state.books);
            })
    }


    // getBooksByTitle(query) {
    //     API.getBooksByTitle(query)
    //         .then(results => {
    //             this.setState({
    //                 books: results.data.items
    //             })
    //             // .catch(() =>
    //             //     this.setState({
    //             //         books: [],
    //             //         message: "No books found! Boo..."
    //             //     })
    //             // )
    //             console.log(this.state.books);
    //         })
    // }

    handleBookSave(id) {
        alert("Need to set up a save to DB for " + id);
    }

    render() {
        return (
            <div>
                <br /> <br />
                <form className="book-input">
                    <div>
                        <label className="input-label" htmlFor="Query">
                            <strong>Book: </strong>
                            <input
                                id="Title"
                                type="text"
                                value={this.state.query}
                                placeholder="Title, e.g. Harry Potter"
                                name="query"
                                onChange={this.handleInputChange}
                                required
                            />
                            <button className="btn-primary"
                                onClick={this.handleFormSubmit}
                                type="submit"
                            >
                                Search
            </button>
                        </label>
                    </div>
                </form>
                {/* <hr></hr> */}
                {
                    this.state.books.length ? (
                        <div className="book-body">
                            {this.state.books.map(book => (
                                <Book
                                    id={book.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    thumb={book.volumeInfo.imageLinks.thumbnail}
                                    description={book.volumeInfo.description}
                                    link={book.volumeInfo.previewLink}
                                    onClick={this.handleBookSave}>
                                </Book>
                            ))}
                        </div>
                    ) : (
                            <div className="error-statement">
                                <b>{this.state.message}</b>
                            </div>
                        )
                }

            </div >
        );
    }
}

export default Home;