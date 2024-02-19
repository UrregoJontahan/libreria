import React from "react";
import "./SelectedBooks.css"

function SelectedBooks({clonedImg,inLIst,onRemove}){

    if(!inLIst){
        return false
    }
    return(
        <div>
            <p className="books-in-list">{inLIst} en la lista de lectura</p>
            <div className="container-selected">
                <h2 className="listBooksSelected active"> Lista del lectura</h2>
                <div className="imgCover-select">
                    {clonedImg.map((img,i)=>(
                        <img 
                            key={i}
                            src={img.cover_image} 
                            className="cloned-cover-img" 
                            onClick={()=>onRemove(i)}   
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export { SelectedBooks }