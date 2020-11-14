import { useState } from 'react'


const Tick = () => {
    let time = new Date().toLocaleTimeString()
    const [clock, setClock] = useState(time)
    
    const updateTime = () =>{
        time = new Date().toLocaleTimeString()
        setClock(time)
    }    
    setInterval(updateTime, 1000)
    return(
       <div>
            <h1>Meu Tick</h1>
            <h2>Horário Brasileiro de Verão: {clock}</h2>
       </div> 
    )
}

export default Tick