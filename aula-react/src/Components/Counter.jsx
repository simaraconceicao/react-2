import { useState } from 'react'


const Counter = () => {
    const [countClick, setCountClick] = useState(0)

    function handleClickSum(){
        setCountClick(countClick + 1)
    }
    function handleClickSub(){
        setCountClick(countClick - 1)
    }
    

    return (
        <div>
            <button onClick={handleClickSub}>-</button>
            <h2>{countClick}</h2>
            <button onClick={handleClickSum}>+</button>
        </div>
    )
}

export default Counter