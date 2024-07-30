import Grogu from "./Grogu";

function Board(props) {
  const cells = Array(7).fill(null);
  //Array(7) crea un array con 7 elementos vacios
  //fill (null) los rellena con null

  function renderCell() {
    return cells.map((_, index) => <div className="cell" key={index}></div>);
  }

  return (
    <>
      <section className="board">
        <div className="cell">
          <Grogu />
        </div>
        {renderCell()}
      </section>
    </>
  );
}
export default Board;
