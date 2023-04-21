import { useEffect, useState } from 'react';

import './favorites.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favorites(){

    const [films, setFilms] = useState([])

    useEffect(()=>{

        const myList = localStorage.getItem("@viewflix");
        setFilms(JSON.parse(myList) || [])

    }, [])

    function deletefilm(id){
        let filterFilms = films.filter((item) => {
            return (item.id !== id)
        })
        setFilms(filterFilms);
        localStorage.setItem("@viewflix", JSON.stringify(filterFilms))
        toast.success("Filme removido com sucesso!")
    }

    return(
        <div className='my-films'>
            <h1>Meus Favoritos</h1>
            {films.length === 0 && <span>Você não possui nenhum filme salvo :/ </span>}
            <ul>
                {films.map((item) => {
                   return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => deletefilm(item.id)}>Excluir</button>
                        </div>
                    </li>
                   ) 
                })}
            </ul>
        </div>
    )
}

export default Favorites;