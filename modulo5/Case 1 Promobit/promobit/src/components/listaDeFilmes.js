import React from "react";
import "./listaDeFilmes.css";


export default ({ title, items }) => {
  return (
    <div className="linhaDeFilmes">
      <h2>{title}</h2>
      <span></span>
      <div className="listaSecundaria">
        <div className="listaMovel">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="listaItens">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
