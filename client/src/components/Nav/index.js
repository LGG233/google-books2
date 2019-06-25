import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/saved">Saved Books</Link>
        </div>
    );
}

export default Nav;