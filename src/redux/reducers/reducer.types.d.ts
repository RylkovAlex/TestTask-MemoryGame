declare interface ReducerAction {
  type: Actions;
  payload?: any;
}

declare interface UserState {
  name: string;
  results: UserResult[] | [];
  isLogged: boolean;
}

declare interface GameState {
  round: number;
  mistakes: number;
  timer: number;
  isFinished: false;
}

declare interface UserResult {
  date: number;
  time: number;
  mistakes: number;
}

declare interface Result {
  name: string;
  date: number;
  mistakes: number;
  time: number;
}
