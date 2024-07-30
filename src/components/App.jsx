import "../scss/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import { useState } from "react";

function App() {
  const [nameUser, setNameUser] = useState(""); //Actualizar el input del nombre del usuario

  const handleChangeName = (event) => {
    const valueInput = event.target.value;
    setNameUser(valueInput);
  };

  const [stepGrogu, setStepGrogu] = useState(""); // Pasitos del Grogu

  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]); //Mercancía

  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);

  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);

  const [diceResult, setdiceResult] = useState(null); //Valor del dado

  const [stateGame, setStateGame] = useState("En curso"); //Estado del juego

  const [reset, setReset] = useState(); // Btn reset

  function rollDice() {
    const randomNumber = Math.ceil(Math.random() * 4);
    setdiceResult(randomNumber);
    console.log(randomNumber);

    if (randomNumber === 1) {
      cookies.pop();
    } else if (randomNumber === 2) {
      eggs.pop();
    } else if (randomNumber === 3) {
      frogs.pop();
    } else {
      setStepGrogu((groguPosition) => groguPosition + 1);
    }
  }

  return (
    <div className="page">
      <Header name={nameUser} />
      <form>
        <label className="label-input" htmlFor="name">
          Introduce tu nombre para jugar
        </label>
        <input
          className="input-name"
          id="name"
          placeholder="Tu nombre"
          onChange={handleChangeName}
        ></input>
      </form>

      <main className="page">
        <Board position={stepGrogu} />

        <section>
          <Dice onClickButton={rollDice} />
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
