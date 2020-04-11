import React from "react";
import constants from "src/constants/constants";
import "./game-card.css";

export interface Card {
  isOpened: boolean;
  isDone: boolean;
  id: number;
  name: string;
}

interface GameCardProps {
  data: Card;
  handleClick: Function;
}

const size = {
  width: `${Math.floor(100 / constants.GAME_BOARD_SIZE.width)}%`,
  height: `${Math.floor(100 / constants.GAME_BOARD_SIZE.height)}%`,
};

const GameCard: React.FC<GameCardProps> = ({ data, handleClick }) => {
  const { isDone, isOpened } = data;
  const cardClasses = ["game-card"];
  isDone && cardClasses.push("done");
  isOpened && cardClasses.push("opened");

  return (
    <div
      className={cardClasses.join(" ")}
      onClick={() => handleClick(data)}
      style={size}
    >
      {!isOpened ? (
        <div className="front z-depth-5">
          <img
            src={`${constants.PARH_TO_CARD_IMG}/question.png`}
            alt={data.name}
          />
        </div>
      ) : (
        <div className="back z-depth-5">
          <img
            src={`${constants.PARH_TO_CARD_IMG}/${data.name}.png`}
            alt={data.name}
          />
        </div>
      )}
    </div>
  );
};

export default GameCard;
