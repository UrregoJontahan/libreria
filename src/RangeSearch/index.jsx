import React, { useEffect } from "react";
import "./RangeSearch.css"
import { GetDataApi } from "../GetDataApi";

function RangeSearch(){
    const [pages,setPages]=React.useState([])
    const [selectPages,setSelectPages]=React.useState(null)

    useEffect(()=>{
        const FilterPages= async()=>{
            const pagesBooks= await GetDataApi()
                setPages(pagesBooks)
        }

        FilterPages()
    },[])

    const pagesBooks=(e)=>{
        setSelectPages(Number(e.target.value))
        console.log(e.target.value )
    }

    return(
        <div className="countainer-range">
            <p className="text-range">filtrar por Fecha</p>
            <input className="range" 
                type="range" 
                min={"1830"} 
                max={"2023"} 
                onChange={pagesBooks}
            />
             <div className="countainer-FatherList">
                <div className="countainer-ListBooks">
                    <ul>
                        {pages
                            .filter((book) => !selectPages || book.publication_year >= selectPages)
                            .map((book) => (
                                <img className="cover-image" key={book.id} src={book.cover_image}/>
                            ))}
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export { RangeSearch }