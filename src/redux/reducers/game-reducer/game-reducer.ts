import { GameActions } from "../../action-creator/action";

const gameInitialState: GameState = {
  round: 0,
  mistakes: 0,
  timer: 0,
  isFinished: false,
};

const gameReducer = (state: GameState = gameInitialState, action: ReducerAction) => {
  switch (action.type) {
    case GameActions.INCREMENT_ROUND:
      return Object.assign({}, state, {
        round: state.round + action.payload,
      });
    case GameActions.INCREMENT_MISTAKES:
      return ({
        ...state,
        mistakes: state.mistakes + action.payload
      });
    case GameActions.FINISH_GAME:
      return ({
        ...state,
        isFinished: true,
      });
    case GameActions.RESET_GAME:
      return Object.assign({}, gameInitialState);
    case GameActions.TICK_TIMER:
      return Object.assign({}, state, {
        timer: state.timer + 1,
      });
  }
  return state;
};

export default gameReducer;
