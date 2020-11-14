import { useState, useEffect } from 'react'


const Repositories = ( )=>{
    const [ repositories, setRepositories] = useState([])

    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
            const data = await response.json()

            setRepositories(data)
        }
        getData()
        
    }, [])

    return (
        <div>
            <h1>Portfólio retornado: {repositories.length} projetos</h1>
            <ul>
                {repositories.map(repo =>{
                    return <li key={repo.id}>{repo.name}</li>
                    
                    
                })}
            </ul>
        </div>
        
    )
}

export default Repositories