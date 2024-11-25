/* eslint-disable react/prop-types */
const GameOver = ({ retry }) => {
  return (
    <>
      <h2>GameOver</h2>
      <button onClick={retry}>Voltar ao Inicio</button>
    </>
  );
};

export default GameOver;
