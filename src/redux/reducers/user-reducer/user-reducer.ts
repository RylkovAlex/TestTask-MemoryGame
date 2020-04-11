import { UserActions } from "src/redux/action-creator/action";

const userInitialState: UserState = {
  name: "Guest",
  results: [],
  isLogged: false,
};

const userReducer = (
  state: UserState = userInitialState,
  action: ReducerAction
) => {
  switch (action.type) {
    case UserActions.SET_USER:
      return action.payload;
    case UserActions.PUSH_NEW_RESULT:
      const results = [...state.results, action.payload];
      return { ...state, results };
    case UserActions.LOG_OUT:
      return userInitialState;
  }
  return state;
};

export default userReducer;
