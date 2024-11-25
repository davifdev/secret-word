/* eslint-disable react/prop-types */
import styles from "./style.module.css";

const Game = ({ verifyLetter }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
   
    verifyLetter();
  };
  return (
    <div className={styles.game}>
      <div className={styles.points}>
        <span>Pontuação: 10</span>
      </div>
      <h1>Adivinhe a palavra:</h1>
      <div className={styles.tip}>
        <span>Dica sobre a palavra: Fruta</span>
      </div>
      <p>Você ainda tem 5 tentativas</p>

      <div className={styles.wordContainer}>
        <span className={styles.letter}></span>
        <span className={styles.blankSquare}></span>
      </div>

      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength={1}  />
          <button>Jogar!</button>
        </form>
      </div>
      <div className={styles.wrongLetterContainer}>
        <span>Letras Utilizadas:</span>
      </div>
    </div>
  );
};

export default Game;
