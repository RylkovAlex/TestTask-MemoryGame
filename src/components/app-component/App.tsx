import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { appState } from 'src/redux/reducers/root-reducer/root-reducer';
import { getRoutes } from 'src/routes';
import { storage } from 'src/utils/storage';
import actionCreator from 'src/redux/action-creator/action-creator';

interface AppProps {
  user?: UserState
  setUser: Function
  isGameFinished: boolean
}

const App: React.FC<AppProps> = ({ setUser, isGameFinished }) => {
  useEffect(() => {
    const currentUser = storage.getLoggedUser()
    if (currentUser) {
      setUser(currentUser)
    }
  }, [setUser])

  const routes = getRoutes(!!storage.getLoggedUser(), isGameFinished)
  return <>{routes}</>
}

const mapStateToProps = (state: appState, ownProps: object) => ({
  ...ownProps,
  user: state.user,
  isGameFinished: state.game.isFinished,
})

const mapDispatchToProps = (dispatch: Function) => ({
  setUser: (user: UserState) => dispatch(actionCreator.setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
