import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import './filme-info.css'

function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        async function loadFilme() {
            await api.get(`movie/${id}`, {
                params:{
                    api_key: "eef6b66e285657e40eecbdaa6cc04f9d",
                    language: "pt-BR"
                }
            }).then((response) => {
                setFilme(response.data)
                setLoading(false)
            } )
            .catch(() => {
                console.log("FILME NAO ENCONTRADO!")
                navigate('/', {replace: true})
                alert("Ops, filme nao encontrado.")
                }
            )
        }

        loadFilme()

       return () => {
        console.log("COMPONENTE DESMONTADO!")
       }
   },[id, navigate])

   if(loading){
        return(
            <div className="loading">
                <h2>Carregando detalhes do filme...</h2>
            </div>
        )
   }
    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse: </h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <a target="_blank" rel="external noreferrer" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} >Trailer</a>
            </div>
        </div>
    )
}

export default Filme;