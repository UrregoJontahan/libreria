import React from "react"
import { GetDataApi } from "../GetDataApi"
import "./BookSearch.css"
import { useEffect } from "react";

function InputSearch({setbooklist}){
    const[genres,setGenres]=React.useState([]);
    const [bookFilter,setBookFilter]=React.useState([])
    const [selectBook,setSelectBook]=React.useState(``)

    useEffect(()=>{
        const genresBooks=async()=>{
            const genresData= await GetDataApi()
            let genres = genresData.flatMap(book => book.genre)
            setGenres(genres)
            setBookFilter(genresData)
            setbooklist(genresData)
        }
        genresBooks()

    },[])
    
    const GenreBooksInput=(e)=>{
      let value = e.target.value
        setSelectBook(value)
        
        const filtered= bookFilter.filter((book)=>
          !e.target.value || book.genre.includes(value)
        )
        setbooklist(filtered)
    }
    return(
         <div className="countainer-search">
         <span className="text-input-searh">filtrar por género 
          <div className="buttonList">
            <select 
              id="bookInput"
              onChange={GenreBooksInput}
              value={selectBook}
            >
              <option value="">Todas</option>
              {genres.map((genre) => (
                <option value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </span> 
      </div>  
    )
}

export { InputSearch }

