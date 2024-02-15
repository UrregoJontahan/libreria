import React from "react";
import "./BooksAvailable.css"

function BooksAviable({total}){ 
    return(
        <h2 
            className="BooksAviable">
            {total} libros disponibles
        </h2>
    )
}

export { BooksAviable }