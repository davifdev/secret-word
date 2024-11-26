// CSS
import "./App.css";

// Hooks
import { useCallback, useEffect, useState } from "react";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// Data
import { wordList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");

  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);

    const randomCategory = Math.floor(
      Math.random() * Object.keys(categories).length
    );

    const category = categories[randomCategory];

    const randomWord = Math.floor(Math.random() * words[category].length);

    const word = words[category][randomWord];

    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    clearLettersStates();
    setGameStage(stages[1].name);

    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetters = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetters) ||
      wrongLetters.includes(normalizedLetters)
    ) {
      console.log("Já tem meu irmão");
      return;
    }

    if (letters.includes(letter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetters,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetters,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === stages[1].name
    ) {
      setGameStage(stages[2].name);
      startGame();
      setScore((actualScore) => actualScore + 100);
    }
  }, [letters, guessedLetters, startGame, gameStage]);

  const retry = () => {
    setScore(0);
    setGuesses(5);
    setGameStage(stages[0].name);
  };

  return (
    <div className="container">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
