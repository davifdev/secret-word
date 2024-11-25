/* eslint-disable react/prop-types */
import styles from "./style.module.css";

const GameOver = ({ retry }) => {
  return (
    <div className={styles.gameOver}>
      <h1>Fim do Jogo!</h1>
      <div>
        A sua pontuação foi: <span>100</span>
      </div>
      <button onClick={retry}>Voltar ao Inicio</button>
    </div>
  );
};

export default GameOver;
