/* eslint-disable react/prop-types */

// Components
import { useRef, useState } from "react";

// CSS
import styles from "./style.module.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.game}>
    
      <div className={styles.points}>
        <span>Pontuação: {score}</span>
      </div>
      <h1>Adivinhe a palavra:</h1>
      <div className={styles.tip}>
        <span>Dica sobre a palavra: {pickedCategory}</span>
      </div>
      <p>Você ainda tem {guesses} tentativas</p>

      <div className={styles.wordContainer}>
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span className={styles.letter} key={index}>
              {letter}
            </span>
          ) : (
            <span className={styles.blankSquare} key={index}></span>
          )
        )}
      </div>

      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            onChange={(e) => setLetter(e.target.value)}
            ref={inputRef}
            value={letter}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className={styles.wrongLetterContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
