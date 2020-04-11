import { combineReducers } from "redux";
import userReducer from "../user-reducer/user-reducer";
import gameReducer from "../game-reducer/game-reducer";

export interface appState {
  user: UserState;
  game: GameState;
}

export default combineReducers({
  user: userReducer,
  game: gameReducer,
});
