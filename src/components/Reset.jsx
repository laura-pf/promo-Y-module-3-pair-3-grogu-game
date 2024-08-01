function Reset(props){

    const handleClick = () => {
        props.onClickReset()
    }

    return(
        <>
        <section>
          <button className="restart-button" onClick={handleClick} >Reiniciar Juego</button>
        </section>
        </>
    )
}
export default Reset;