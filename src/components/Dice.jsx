function Dice(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onClickButton();
  }
  return (
    <>
      <button className="dice" onClick={handleClick}>
        Lanzar Dado
      </button>
    </>
  );
}
export default Dice;
