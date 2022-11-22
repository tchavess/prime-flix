import { useEffect, useState } from "react"
import './favoritos.css'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
export default function Favoritos(){

    const [filmes, setFilmes] = useState([])
    
    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix")
        let filmesSalvos = minhaLista || []
        setFilmes(JSON.parse(filmesSalvos))

    },[])

    function excluiFilmeDaLista(id ){
        const filmeFiltro = filmes.filter( (filme) => filme.id !== id ) 
        setFilmes(filmeFiltro)
        localStorage.setItem("@primeflix", JSON.stringify(filmeFiltro))
        toast.success("Filme excluido com sucesso")
    }
    
    return(
        <div className="meus-filmes">
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Ops, voce nao possui nenhum filme salvo.</span>}
            
            <ul>
                {filmes.map((filme) => {
                return(
                    <li key={filme.id}>
                    <span>{filme.title}</span>

                    <div>
                        <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                        <button onClick={() => excluiFilmeDaLista(filme.id)}>Excluir</button>
                    </div>
                    </li>
                )
                })}
            </ul>
        </div>
    )
}