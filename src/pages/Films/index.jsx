import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './films.css'


function Films() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [films, setFilms] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilms() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "d32a6d482abb9bd1339948661457fc31",
          language: "pt-BR",
        }
      })
        .then((response) => {
          setFilms(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true })
          return;
        })
    }

    loadFilms();

    return () => {

    }
  }, [navigate, id])

  function saveFilm() {
    const myList = localStorage.getItem("@viewflix");

    let filmSave = JSON.parse(myList) || [];

    const hasfilm = filmSave.some((filmSave) => filmSave === films.id)

    if (hasfilm) {
      alert("Esse filme já está na lista!")
      return;
    }

    filmSave.push(films)
    localStorage.setItem("@viewflix", JSON.stringify(filmSave))
    alert("Filme salvo com sucesso!")

  }

  if (loading) {
    return (
      <div className="film-info">
      </div>
    )
  }
  return (
    <div className="film-info">
      <h1>{films.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${films.backdrop_path}`} alt={films.title} />

      <h3>Sinopse</h3>
      <span>{films.overview}</span>
      <strong>Avaliação: {films.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={saveFilm}>Salvar</button>
        <button>
          <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${films.title} trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Films;