import React, { useEffect, useState } from "react";
import ListaDeFilmes from "./components/listaDeFilmes";
import Tmdb from "./Tmdb";


export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists" >
      {movieList.map((item, key) => (
        <ListaDeFilmes key={key} title={item.title} items={item.items} />
      ))}
      </section>
    </div>
  );
};
