import { useState, useEffect } from 'react'


const Repos = ( )=>{
    const [repositories, setRepositories] = useState([])
    const [filteredRepos, setfilteredRepos] = useState([])
    const [search, setSearch] = useState('')
    
   
    


    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
            const data = await response.json()

            setRepositories(data)
        }
        getData()
        
    }, [])

    useEffect(()=>{
        setfilteredRepos(
            repositories.filter(
                repo =>{
                    return repo.name.includes(search)
                }
            )
        )
    },[search, repositories])

    return (
        <div>
            <h1>Meus Repos:</h1>

            <input      
                type="text" 
                onChange={e => setSearch(e.target.value)}
                placeholder="Digite um Repo"
            />

            

            <ul>
                {filteredRepos.map(repo =>{
                    return <li key={repo.id}>{repo.name}</li>
                    
                    
                })}
            </ul>
        </div>
        
    )
}

export default Repos