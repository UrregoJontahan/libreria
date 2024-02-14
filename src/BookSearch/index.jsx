import React from "react"
import { GetDataApi } from "../GetDataApi"
import "./BookSearch.css"
import { useEffect } from "react";

function InputSearch(){
    const[genres,setGenres]=React.useState([]);
    const [selectBook,setSelectBook]=React.useState(``)

    useEffect(()=>{
        const genresBooks=async()=>{
            const genresData= await GetDataApi()
            setGenres(genresData)
        }
        genresBooks()

    },[])


    const GenreBooksInput=(e)=>{
        setSelectBook(e.target.value)
        console.log(e.target.value)
    }

    return(
         <div className="countainer-search">
         <span className="text-input-searh">filtrar por género 
          <div className="buttonList">
            <select 
              id="bookInput"
              onClick={GenreBooksInput}
            >
              <option value="">Todas</option>
              {genres.map((book) => (
                <option key={book.id} value={book.genre}>
                  {book.genre}
                </option>
              ))}
            </select>
          </div>
        </span>
      </div> 
    )
}

export { InputSearch }

