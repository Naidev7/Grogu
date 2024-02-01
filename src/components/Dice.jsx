import PropTypes from "prop-types";


function Dice({funtionClick}) {
  return (
    <button className="dice" onClick={funtionClick}>
      Lanzar Dado 🎲
    </button>
  );
}

Dice.propTypes = {
    funtionClick: PropTypes.object
}

export default Dice;
