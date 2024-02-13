import React from "react";
import "./RangeSearch.css"

function RangeSearch(){
    return(
        <div className="countainer-range">
            <p className="text-range">filtrar por páginas</p>
            <input className="range" type="range" min={"10"} max={"1500"} value={"100"} />
        </div>
    )
}

export { RangeSearch }