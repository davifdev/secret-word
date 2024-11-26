/* eslint-disable react/prop-types */
import styles from "./style.module.css";

const GameOver = ({ retry, score }) => {
  return (
    <div className={styles.gameOver}>
      <h1>Fim do Jogo!</h1>
      <div>
        A sua pontuação foi: <span>{score}</span>
      </div>
      <button onClick={retry}>Voltar ao Inicio</button>
    </div>
  );
};

export default GameOver;
