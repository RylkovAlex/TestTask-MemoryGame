/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import actionCreator from "src/redux/action-creator/action-creator";
import { appState } from "src/redux/reducers/root-reducer/root-reducer";

interface HeaderProps {
  user?: UserState;
  game?: GameState;
  logOut: Function
}

const Header: React.FC<HeaderProps> = ({ logOut }) => {
  const history = useHistory();

  const logoutHandler = (
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    evt.preventDefault();
    logOut();
    history.push("/");
  };

  return (
    <nav className="nav-extended blue darken-1">
      <div className="container nav-wrapper">
        <ul>
          <li>
            <NavLink to="/" className="brand-logo left">
              Memory Game
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="brand-logo right"
              onClick={logoutHandler}
            >
              <i className="large material-icons">exit_to_app</i>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="container nav-content blue darken-1">
        <ul className="tabs tabs-transparent">
          <li className="tab">
            <NavLink to="/">Game</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/results">Results</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: appState, ownProps: object) => ({
  ...ownProps,
  game: state.game,
  user: state.user
})

const mapDispatchToProps = (dispatch: Function) => ({
  logOut: () => dispatch(actionCreator.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
