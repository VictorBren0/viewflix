import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

function Home(){
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() =>{
    async function loadFilms() {
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "d32a6d482abb9bd1339948661457fc31",
          language: "pt-BR",
          page: 1,
        }
      })
      setFilms(response.data.results.slice(0, 10))
      setLoading(false)
    }
    loadFilms();
  })

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return(
    <div className="container">
      <div className="list-films">
        {films.map((films) => {
          return(
            <article key={films.id}>
              <strong>{films.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${films.poster_path}`} alt={films.title}/>
              <Link to={`/filme/${films.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;