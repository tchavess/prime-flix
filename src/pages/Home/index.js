import api from "../../services/api";
import './home.css'
import { useEffect, useState} from 'react'
import { Link } from "react-router-dom";


function Home() {
    const [filmes, setFilmes] = useState([]);

    async function loadFilmes(){
        const response = await api.get("movie/now_playing",{
            params:{
                api_key: "eef6b66e285657e40eecbdaa6cc04f9d",
                language: "pt-BR"
            }
        })
        setFilmes(response.data.results.slice(0,10))
    }

    useEffect(() => {
        loadFilmes()
    },[])

    return(
       <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                   return( 
                        <article key={filme.id}>
                            <strong>
                                {filme.title}
                            </strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`} >Acessar</Link>
                        </article>
                   )
                })
                }
            </div>
       </div>
            
    )
}

export default Home;