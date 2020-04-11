import React from "react";
import { connect } from "react-redux";
import { appState } from "src/redux/reducers/root-reducer/root-reducer";

import "./game-info.css";

interface GameInfoProps {
  game?: GameState;
}

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
  return (
    <div className="game-info">
      <div className="row">
        <div className="col s6 mistakes">
          <p>{`Mistakes:`}</p>
          <p>{game!.mistakes}</p>
        </div>
        <div className="col s6 mistakes">
          <p>{`Game Time:`}</p>
          <p>{`${game!.timer} sec`}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: appState, ownProps: object) => ({
  ...ownProps,
  game: state.game,
});

export default connect(mapStateToProps, null)(GameInfo);
