import "../scss/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import Form from "./Form"
import Reset from "./Reset"
import { useState } from "react";

function App() {
  const [nameUser, setNameUser] = useState(""); //Actualizar el input del nombre del usuario

  const [stepGrogu, setStepGrogu] = useState(0); // Pasitos del Grogu

  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]); //Mercancía

  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);

  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);

  //const [diceResult, setdiceResult] = useState(null); //Valor del dado

  const [stateGame, setStateGame] = useState("En curso"); //Estado del juego


  function rollDice() {
    const randomNumber = Math.ceil(Math.random() * 4);
    //setdiceResult(randomNumber);
    console.log(randomNumber);

    if (randomNumber === 1) {
      setCookies.pop();
    } else if (randomNumber === 2) {
      setEggs.pop();
    } else if (randomNumber === 3) {
      setFrogs.pop();
    } else {
      setStepGrogu((groguPosition) => groguPosition + 1);
    }
  }

function handleChangeInput(value){
  setNameUser(value)
}

function handleClickReset(){

  setNameUser("")
  setStepGrogu(0)
  setCookies (["🍪", "🍪", "🍪"])
  setEggs (["🥚", "🥚", "🥚"])
  setFrogs (["🐸", "🐸", "🐸"])
  setdiceResult (null)
  setStateGame ("En curso")
}

  return (
    <div className="page">
      <Header name={nameUser} />
      
      <Form onChangeInput = {handleChangeInput} user = {nameUser} />

      <main className="page">
        <Board position = {stepGrogu} />

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
        <Reset onClickReset = {handleClickReset}  />
      </main>
    </div>
  );
}

export default App;
