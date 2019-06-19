import React, { Component } from "react";
import API from "../util/API";
import Book from "../components/Book";

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
                    books: results.data.items
                })
                // .catch(() =>
                //     this.setState({
                //         books: [],
                //         message: "No books found! Boo..."
                //     })
                // )
                console.log(this.state.books);
            })
    }

    handleBookSave(id) {
        alert("Need to set up a save to DB for " + id);
    }

    render() {
        return (
            <div>
                <br /> <br />
                <form>
                    <div>
                        <label htmlFor="Query">
                            <strong>Book: </strong>
                        </label>
                        <input
                            id="Title"
                            type="text"
                            value={this.state.query}
                            placeholder="Title, e.g. Harry Potter"
                            name="query"
                            onChange={this.handleInputChange}
                            required
                        />
                        <button
                            onClick={this.handleFormSubmit}
                            type="submit"
                        >
                            Search
            </button>
                    </div>
                </form>
                {/* <hr></hr> */}
                {
                    this.state.books.length ? (
                        <div>
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
                            <b>{this.state.message}</b>
                        )
                }

            </div >
        );
    }
}

export default Home;

// import React, {Component} from "react";
                // import Book from "../components/Book";
                // import API from "../util/API";

// class Home extends Component {
//     state = {
//         book: [],
//         query: "",
//         message: "Search For A Book To Begin!"
//     };
// }
// export default Home;

    //     handleInputChange = event => {
    //         const { name, value } = event.target;
    //         this.setState({
    //             [name]: value
    //         });
    //     };

    //     handleFormSubmit = event => {
    //         event.preventDefault();
    //         this.getBooksByTitle(this.state.query);
    //     };

    //     getBooksByTitle(query) {
    //         this.setState({
    //             books: API.getBooksByTitle(query).books
    //         });
    //         console.log("hello");
    //         //This code would throw an error, comment it out for now. 
    //         // .then(res =>
    //         //     this.setState({
    //         //         games: res.games
    //         //     }))
    //         // .catch(() =>
    //         //     this.setState({
    //         //       games: [],
    //         //       message: "No new games found! Boo..."
    //         //     })
    //         //   );
    //     }

    //     handleSaveBook(id) {
    //         alert("Book saved to database - ID: " + id);
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <br /><br />
    //                 <form>
    //                     <div>
    //                         <label htmlFor="Query">
    //                             <strong>Game: </strong>
    //                         </label>
    //                         <input
    //                             id="Title"
    //                             type="text"
    //                             value={this.state.query}
    //                             placeholder="Magic"
    //                             name="query"
    //                             onChange={this.handleInputChange}
    //                             required
    //                         />
    //                         <button
    //                             onClick={this.handleFormSubmit}
    //                             type="submit"
    //                         >
    //                             Search
    //                     </button>
    //                     </div>
    //                 </form>
    //                 <hr></hr>
    //                 {this.state.games.length ? (
    //                     <div>
    //                         {this.state.games.map(game => (

    //                             <Game
    //                                 id={game.id}
    //                                 title={game.name}
    //                                 image={game.images.thumb}
    //                                 description={game.description}
    //                                 handleGameSave={this.handleSaveGame}>

    //                             </Game>
    //                         ))}
    //                     </div>
    //                 ) : (
    //                         <b>{this.state.message}</b>
    //                     )}

    //             </div>
    //         );
    //     }