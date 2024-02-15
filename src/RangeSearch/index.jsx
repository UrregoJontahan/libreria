import React, { useEffect } from "react";
import "./RangeSearch.css"
import { GetDataApi } from "../GetDataApi";

function RangeSearch({setBookList}){
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
        
    const filterYear= pages.filter((book) =>  
        !selectPages || book.publication_year >= selectPages
        )
       setBookList(filterYear)  
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
        </div>
    )
}

export { RangeSearch }