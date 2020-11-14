import { useState } from 'react'


const CountClick = () => {
    const [countClick, setCountClick] = useState(0)

    function handleClick(){
        setCountClick(countClick + 1)
    }
    

    return (
        <div>
            <h2>{countClick}</h2>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    )
}

export default CountClick