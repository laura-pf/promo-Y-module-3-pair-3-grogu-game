import "../scss/App.scss";
import { useState } from "react";

function App() {

  const[nameUser, setNameUser] = useState("") //Actualizar el input del nombre del usuario

  const handleChangeName = (event) => {
    const valueInput = event.target.value
    setNameUser(valueInput)
  }

  const [stepGrogu, setStepGrogu] = useState() // Pasitos del Grogu

  const [commodity, setCommodity] = useState() //Mercancía

  const [diceResult, setdiceResult] = useState(0) //Valor del dado

  const [stateGame, setStateGame] = useState("En curso") //Estado del juego

  const  [reset, setReset] = useState() // Btn reset

  return (
    <div className="page">
      <header>
        <h1>¡Cuidado con Grogu, {nameUser}!</h1>
      </header>

      <form>
        <label className="label-input" htmlFor="name">Introduce tu nombre para jugar</label>
        <input className="input-name" id="name" placeholder="Tu nombre" onChange={handleChangeName}></input>
      </form>

      <main className="page">
        <section className="board">
          <div className="cell">
            <div className="grogu">👣</div>
          </div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

        <section>
          <button className="dice">Lanzar Dado</button>
          <div className="game-status">{stateGame}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
