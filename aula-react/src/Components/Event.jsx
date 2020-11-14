const Event = () => {
    function handleClick(e){
        console.log("click funcionando", e)
    }

    return (
        <div>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    )
}

export default Event