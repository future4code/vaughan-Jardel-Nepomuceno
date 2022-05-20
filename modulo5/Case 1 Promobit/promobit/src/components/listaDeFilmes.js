import React from "react";
import './listaDeFilmes.css';
import styledComponents from "styled-components";

export default ({title, items}) => {
    return (
        <div>
       <h2>
         {title}  
         <div className="linhaDeFilmes" >
             {items.results.length > 0 && items.results.map ((item , key) =>(
                 <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
             )) }
         </div>
       </h2>
        </div>

        
    )
}