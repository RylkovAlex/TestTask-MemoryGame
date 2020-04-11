import React from "react";
import "./welcom-screen.css";
import { appState } from "src/redux/reducers/root-reducer/root-reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const rules: string[] = [
  `The gameplay is the sequence of rounds. In each round you should select 2
  tiles.`,
  `If you select 2 tiles with different images then they will flip to
  "closed" state, and your mistakes will increase by 1.`,
  `If you select 2 tiles with the same images, they will disappear, and
  you proceed to the next round.`,
  `The game is considered over when all the tiles have disappeared.`,
];

interface WellcomeScreenProps {
  user?: UserState;
}

const WellcomeScreen: React.FC<WellcomeScreenProps> = ({ user }) => (
  <>
    <h3 className="center-align welcome">
      Hello, {user!.name}!<br/>Are you ready to play?
    </h3>
    <ul className="collection with-header rules-list">
      <li className="collection-header">
        <h4 className="center-align">Game Rules:</h4>
      </li>
      {rules.map((rule) => (
        <li className="collection-item" key={rule}>
          <div className="secondary-content">
            <i className="material-icons">mood</i>
          </div>
          {rule}
        </li>
      ))}
    </ul>
    <Link to="/play" href="#!" className="btn-large blue darken-1 pulse hoverable">
      <i className="material-icons Large left">play_arrow</i>START GAME
    </Link>
  </>
);

const mapStateToProps = (state: appState, ownProps: object) => ({
  ...ownProps,
  user: state.user,
});

export default connect(mapStateToProps, null)(WellcomeScreen);
