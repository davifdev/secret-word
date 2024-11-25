import "./App.css";

// Hooks
import { useState } from "react";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  const startGame = () => {
    setGameStage(stages[1].name);
  };

  const verifyLeter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLeter={verifyLeter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </>
  );
}

export default App;
