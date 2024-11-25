/* eslint-disable react/prop-types */
import styles from "./style.module.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className={styles.start}>
      <h2>Secret Word</h2>
      <p>Clique aqui para iniciar o jogo!</p>
      <button onClick={startGame}>Iniciar o Jogo</button>
    </div>
  );
};

export default StartScreen;
