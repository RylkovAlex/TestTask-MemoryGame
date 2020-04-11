import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./components/pages/auth-page/auth-page";
import Layout from "./components/layout-component/layout-component";
import WelcomeScreen from "./components/game-screens/welcome-screen/welcome-screen";
import ResultPage from "./components/pages/results-page/results-page";
import { GameScreen } from "./components/game-screens/game-screen/game-screen";
import WinScreen from "./components/game-screens/win-screen/win-screen";

export const getRoutes = (isUser: boolean, isGameFinished: boolean) => {
  if (isUser) {
    return (
      <Switch>
        <Route path="/" exact>
          <Layout>
            <WelcomeScreen />
          </Layout>
        </Route>
        <Route path="/play" exact>
          <Layout>
            <GameScreen/>
          </Layout>
        </Route>
        {isGameFinished && <Route path="/win" exact>
          <Layout>
            <WinScreen/>
          </Layout>
        </Route>}
        <Route path="/results" exact>
          <Layout>
            <ResultPage />
          </Layout>
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <div className="container main">
          <AuthPage />
        </div>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
