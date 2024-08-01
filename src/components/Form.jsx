function Form(props){

    const handleChangeName = (event) => {
        const valueInput = event.target.value;
        props.onChangeInput(valueInput)
      };

    return(
        <form>
        <label className="label-input" htmlFor="name">
          Introduce tu nombre para jugar
        </label>
        <input
          className="input-name"
          id="name"
          placeholder="Tu nombre"
          value={props.user}
          onChange={handleChangeName}
        ></input>
      </form>
    )
}
export default Form;