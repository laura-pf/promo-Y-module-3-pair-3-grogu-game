import "../scss/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import Form from "./Form";
import Reset from "./Reset";
import { useState, useEffect } from "react";

function App() {
  const [nameUser, setNameUser] = useState(""); //Actualizar el input del nombre del usuario

  const [stepGrogu, setStepGrogu] = useState(0); // Pasitos del Grogu

  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]); //Mercancía

  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);

  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);

  //const [diceResult, setdiceResult] = useState(null); //Valor del dado

  const [stateGame, setStateGame] = useState("En curso"); //Estado del juego
  const totalSteps = 7; // se declara esta variable para usarla luego en la condicion del mensaje, para saber en que casilla esta grogu

  function rollDice() {
    const randomNumber = Math.ceil(Math.random() * 4);
    //setdiceResult(randomNumber);
    console.log(randomNumber);

    if (randomNumber === 1) {
      const newCookies = [...cookies];
      if (newCookies.length > 0) {
        newCookies.pop();
        setCookies(newCookies);
        setStateGame(`${nameUser} ha ayudado a mando a recoger una galleta`);
      }
    } else if (randomNumber === 2) {
      const newEggs = [...eggs];
      if (newEggs.length > 0) {
        newEggs.pop();
        setEggs(newEggs);
        setStateGame(`${nameUser} ha ayudado a Mando a recoger un huevo`);
      }
    } else if (randomNumber === 3) {
      const newFrogs = [...frogs];
      if (newFrogs.length > 0) {
        newFrogs.pop();
        setFrogs(newFrogs);
        setStateGame(`${nameUser} ha ayudado a Mando a recoger una rana`);
      }
    } else {
      setStepGrogu((groguPosition) => groguPosition + 1);
      setStateGame("Grogu ha avanzado una casilla");
    }
  }

  useEffect(() => {
    if (stepGrogu === totalSteps - 1) {
      setStateGame("¡¡Grogu se ha comido el cargamento!! Has perdido");
    } else if (
      cookies.length === 0 &&
      eggs.length === 0 &&
      frogs.length === 0
    ) {
      setStateGame("¡Ganaste, Mando completa la misión!");
    }
  }, [cookies, eggs, frogs, stepGrogu]);

  function handleChangeInput(value) {
    setNameUser(value);
  }

  function handleClickReset() {
    setNameUser("");
    setStepGrogu(0);
    setCookies(["🍪", "🍪", "🍪"]);
    setEggs(["🥚", "🥚", "🥚"]);
    setFrogs(["🐸", "🐸", "🐸"]);
    setStateGame("En curso");
  }

  return (
    <div className="page">
      <Header name={nameUser} />

      <Form onChangeInput={handleChangeInput} user={nameUser} />

      <main className="page">
        <Board position={stepGrogu} />

        <section>
          <Dice onClickButton={rollDice} />
          <div className="game-status">{stateGame}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">{cookies[0]}</div>
          <div className="goods-item">{cookies[1]}</div>
          <div className="goods-item">{cookies[2]}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{eggs[0]}</div>
          <div className="goods-item">{eggs[1]}</div>
          <div className="goods-item">{eggs[2]}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{frogs[0]}</div>
          <div className="goods-item">{frogs[1]}</div>
          <div className="goods-item">{frogs[2]}</div>
        </section>
        <Reset onClickReset={handleClickReset} />
      </main>
    </div>
  );
}

export default App;
