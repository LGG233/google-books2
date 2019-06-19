import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">
                <img src="/img/books.jpg" alt="my-bookshelf" width="50" height="50"></img>
            </Link> | &nbsp;
            <Link to="/saved">Saved Books</Link>
        </div>
    );
}

export default Nav;