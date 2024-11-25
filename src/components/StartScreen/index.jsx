/* eslint-disable react/prop-types */
const StartScreen = ({ startGame }) => {
  return (
    <div>
      <h2>Secret Word</h2>
      <p>Clique aqui para iniciar o jogo!</p>
      <button onClick={startGame}>Iniciar o Jogo</button>
    </div>
  );
};

export default StartScreen;
