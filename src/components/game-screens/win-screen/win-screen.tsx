import React from "react";
import { appState } from "src/redux/reducers/root-reducer/root-reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface WinScreenProps {
  user?: UserState;
}

const WinScreen: React.FC<WinScreenProps> = ({ user }) => (
  <>
    <h2 className="center-align welcome">
    Congratulations, {user!.name}!<br/>You won the game!
    </h2>
    <h2>Your Results:</h2>
    <h3>{`Mistakes: ${user!.results[user!.results.length - 1].mistakes}`}</h3>
    <h3>{`Game Time: ${user!.results[user!.results.length - 1].time}`}</h3>
    <hr/>
    <Link to="/results" className="btn-large blue darken-1 hoverable">
      SEE ALL RESULTS
    </Link>
  </>
);

const mapStateToProps = (state: appState, ownProps: object) => ({
  ...ownProps,
  user: state.user,
});

export default connect(mapStateToProps, null)(WinScreen);
