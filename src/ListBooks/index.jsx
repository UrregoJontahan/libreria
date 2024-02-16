import "./ListBooks.css"
import React from "react"

function ListBooksApi({listbooks,onSelectImg}){
    return(
        <div className="max-container">
            <div className="container-ListBooks">
                {listbooks.map(book =>(
                    <img 
                        className="cover-image" 
                        key={book.id} 
                        src={book.cover_image}
                        onClick={()=>onSelectImg(book)}
                        />
                ))}
            </div>
        </div>
        )
} 

export { ListBooksApi }