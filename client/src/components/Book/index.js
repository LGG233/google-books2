import React from "react";

function Book(props) {
    return (
        <div>
            <h3><img src={props.thumb} alt="Book thumbnail"></img> {props.title}</h3>
            <br />
            {props.description}
            <br />
            <button
                onClick={() => props.onClick(props.id)}
            >
                Save Title
                        </button>
            <hr />
        </div>
    );
}

export default Book;