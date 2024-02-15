import "./ListBooks.css"
import React from "react"

function ListBooksApi({listbooks}){
    return(
        <div className="max-countainer">
            <div className="countainer-ListBooks">
                {listbooks.map(book =>(
                    <img className="cover-image" key={book.id} src={book.cover_image} />
                ))}
            </div>
        </div>
        )
} 

export { ListBooksApi }