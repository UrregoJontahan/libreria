import React from "react";
import "./Counter.css"


function Counter({TotalBooks}){
    
   if(TotalBooks===0) return <h1 className="Title-counter">Sin libros en la lista de lectura</h1>

   if (TotalBooks>=1) return <h1 className="Title-counter">Con libros en la lista de lectura</h1>
}

export { Counter }