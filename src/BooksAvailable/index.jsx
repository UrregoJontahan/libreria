import React, { useEffect } from "react";
import "./BooksAvailable.css"
import { GetDataApi } from "../GetDataApi";

function BooksAviable(){

    const [total,setTotal]=React.useState([])
    
    useEffect(()=>{
        const LengthBooks=async()=>{
            const totalBooks= await GetDataApi()
            setTotal(totalBooks)
        }
        LengthBooks()
    },[])

    return(
        <h2 
            className="BooksAviable">
            {total.length} libros disponibles
        </h2>
    )
}

export { BooksAviable }