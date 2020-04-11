import React from "react";
import Gameboard from "src/components/gameboard-component/gameboard-component";
import "./game-screen.css";
import GameInfo from "src/components/game-info/game-info";

export const GameScreen = () => (
  <div className="game-screen">
    <GameInfo />
    <Gameboard />
  </div>
);
