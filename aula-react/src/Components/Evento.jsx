const Evento = () => {
    function handleInputValue(e){
        console.log(e.target.value)
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={handleInputValue}
            />
        </div>
    )
}

export default Evento