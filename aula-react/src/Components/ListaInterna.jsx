import { useState, useEffect } from 'react'
import filmes from '../Services/dados'

const ListaInterna = () => {
    const [search, setSearch] = useState('')
    const [filteredFilms, setFilteredFilms] = useState([])
   
    useEffect(()=>{
        setFilteredFilms(
         filmes.filter(
                filme =>{
                    return filme.nome.includes(search)
                }
            )
        )
    },[search])

    
    return (
        <div>
            <input 
                type="text" 
                onChange={e => setSearch(e.target.value)}
                placeholder="Digite um filme"
            />
            {filteredFilms.map(filme => { 
                return(
                    <li key={filme.id}>{filme.nome}</li>
                )
                
            })}
            
        </div>
    )
}

export default ListaInterna