import { UserActions } from "src/redux/action-creator/action";
import { GameActions } from "./action";
import { storage } from "src/utils/storage";

export default {
  incrementRound: () => ({
    type: GameActions.INCREMENT_ROUND,
    payload: 1,
  }),

  incrementMistakes: () => ({
    type: GameActions.INCREMENT_MISTAKES,
    payload: 1,
  }),

  tickTimer: () => ({
    type: GameActions.TICK_TIMER,
    payload: 1,
  }),

  finishGame: () => ({
    type: GameActions.FINISH_GAME,
  }),

  resetGame: () => ({
    type: GameActions.RESET_GAME,
  }),

  saveResult: (user: UserState, result: UserResult) => {
    storage.saveNewResult(user, result);
    return {
      type: UserActions.PUSH_NEW_RESULT,
      payload: result,
    };
  },

  setUser: (user: UserState) => ({
    type: UserActions.SET_USER,
    payload: user,
  }),

  login: (name: string) => {
    const users = storage.getUsers();
    if (!users.length) {
      const user = {
        name,
        results: [],
        isLogged: true,
      };
      storage.setUsers([user]);
      return {
        type: UserActions.SET_USER,
        payload: user,
      };
    }

    const currentUser = storage.getUser(name);
    if (currentUser) {
      currentUser.isLogged = true;
      storage.logIn(currentUser);
      return {
        type: UserActions.SET_USER,
        payload: currentUser,
      };
    } else {
      const newUser = {
        name,
        results: [],
        isLogged: true,
      };
      storage.addUser(newUser);
      return {
        type: UserActions.SET_USER,
        payload: newUser,
      };
    }
  },

  logOut: () => {
    storage.logOut();
    return {
      type: UserActions.LOG_OUT,
    };
  },
};
