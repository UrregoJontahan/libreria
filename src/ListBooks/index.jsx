import "./ListBooks.css"
import React from "react"
import { useEffect } from "react"
import { GetDataApi } from "../GetDataApi"

function ListBooksApi({children}){
    const[img,setImg]=React.useState([])

    useEffect(()=>{
        const ImgBooks=async()=>{
            const imgData= await GetDataApi()
            setImg(imgData)
        }
        ImgBooks()
 
    },[])

    return(
        <div className="max-countainer">
            {children}
        </div>
        )
}

export { ListBooksApi }