import React from "react";
import "./gameboard-component.css";
import { getMixed } from "src/utils/utils";
import constants from "src/constants/constants";
import GameCard, { Card } from "../game-card/game-card";
import actionCreator from "src/redux/action-creator/action-creator";
import { connect } from "react-redux";
import { appState } from "src/redux/reducers/root-reducer/root-reducer";
import { withRouter } from "react-router-dom";

interface GameBoardProps {
  incrementMistakes: Function;
  incrementRound: Function;
  tickTimer: Function;
  finishGame: Function;
  resetGame: Function;
  saveResult: Function;
  game: GameState;
  user: UserState;
  history: {
    push: Function;
  };
}

interface GameBoardState {
  cards: Card[];
  disabled: boolean;
}

class GameBoard extends React.Component<GameBoardProps, GameBoardState> {
  gameTimerId: number | null;
  gameStateTimers: any;
  static createCards(names: string[]): Card[] {
    let id = 0;
    const createCard = (name: string) => ({
      isOpened: false,
      isDone: false,
      id: id++,
      name: name,
    });
    return [...names.map(createCard), ...names.map(createCard)];
  }

  constructor(props: GameBoardProps) {
    super(props);
    this.state = {
      cards: getMixed(GameBoard.createCards(constants.CARDS)),
      // cards: GameBoard.createCards(constants.CARDS), // for debugging
      disabled: false,
    };
    this.gameTimerId = null;
    this.gameStateTimers = [];
  }

  componentDidMount() {
    this.props.resetGame();
    this.gameTimerId = setInterval(this.props.tickTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.gameTimerId!);
    this.gameStateTimers.forEach((id: number) => {
      clearTimeout(id);
    });
  }

  componentDidUpdate() {
    if (this.props.game.round === this.state.cards.length / 2) {
      const result: UserResult = {
        date: Date.now(),
        mistakes: this.props.game.mistakes,
        time: this.props.game.timer,
      };
      this.props.saveResult(this.props.user, result);
      this.props.finishGame();
      this.props.history.push("win");
    }
  }

  handleClick(card: Card) {
    if (this.state.disabled) {
      return;
    }
    this.setState((state) => {
      const cards = [...state.cards];
      card.isOpened = true;
      const index = cards.findIndex((c) => c.id === card.id);
      cards[index] = card;
      return {
        ...state,
        disabled: true,
        cards,
      };
    }, this.check);
  }

  check() {
    const opened = this.state.cards.filter((c) => c.isOpened && !c.isDone);
    if (opened.length === 2) {
      const first = { ...opened[0] };
      const second = { ...opened[1] };
      const cards = [...this.state.cards];
      const firstIndx = cards.findIndex((card) => card.id === first.id);
      const secondIndx = cards.findIndex((card) => card.id === second.id);

      if (first.name === second.name) {
        first.isDone = true;
        second.isDone = true;
        this.props.incrementRound();
        this.gameStateTimers.push(
          setTimeout(
            () =>
              this.setState((state) => {
                cards[firstIndx] = first;
                cards[secondIndx] = second;
                return {
                  ...state,
                  cards,
                  disabled: false,
                };
              }),
            800
          )
        );
      } else {
        first.isOpened = false;
        second.isOpened = false;
        this.props.incrementMistakes();
        this.gameStateTimers.push(
          setTimeout(
            () =>
              this.setState((state) => {
                cards[firstIndx] = first;
                cards[secondIndx] = second;
                return {
                  ...state,
                  cards,
                  disabled: false,
                };
              }),
            800
          )
        );
      }
    } else {
      this.setState({ disabled: false });
    }
  }

  render() {
    return (
      <div className="game-board">
        {this.state.cards.map((card) => {
          return (
            <GameCard
              key={card.id}
              data={card}
              handleClick={this.handleClick.bind(this)}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: appState) => ({
  game: state.game,
  user: state.user,
});
const mapDispatchToProps = (dispatch: Function) => ({
  incrementMistakes: () => dispatch(actionCreator.incrementMistakes()),
  incrementRound: () => dispatch(actionCreator.incrementRound()),
  tickTimer: () => dispatch(actionCreator.tickTimer()),
  finishGame: () => dispatch(actionCreator.finishGame()),
  resetGame: () => dispatch(actionCreator.resetGame()),
  saveResult: (user: UserState, result: UserResult) =>
    dispatch(actionCreator.saveResult(user, result)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GameBoard)
);
