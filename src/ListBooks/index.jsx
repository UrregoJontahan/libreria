import "./ListBooks.css"
import React from "react"
import { useEffect } from "react"
import { GetDataApi } from "../GetDataApi"

function ListBooksApi(){
    const[img,setImg]=React.useState([])

    useEffect(()=>{
        const ImgBooks=async ()=>{
            const imgData= await GetDataApi()
            setImg(imgData)
        }
        ImgBooks()

    },[])

    return(
        <div className="countainer-FatherList">
            <div className="countainer-ListBooks">
                <ul>
                    {img.map(book=>(
                        <img key={book.id} className="cover-image" src={book.cover_image}/>
                    ))}
                </ul>
            </div>
        </div>
        )
}

export { ListBooksApi }