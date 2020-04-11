import React, { useState } from "react";
import actionCreator from "src/redux/action-creator/action-creator";
import { connect } from "react-redux";

interface AuthPageProps {
  logIn: (name: string) => ReducerAction
}

const AuthPage: React.FC<AuthPageProps> = ({ logIn }) => {
  const [form, setForm] = useState({
    name: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const userName = form.name.trim();
    logIn(userName);
  };

  return (
    <div className="row">
      <div className="col s10">
        <h1>Welcome to Game</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text" style={{ paddingBottom: 0 }}>
            <span className="card-title" style={{ marginBottom: 25 }}>
              Remind me your name, please:
            </span>
            <div>
              <div className="input-field">
                <input
                  className="yellow-input"
                  value={form.name}
                  id="name"
                  type="text"
                  name="name"
                  minLength={3}
                  maxLength={20}
                  onChange={changeHandler}
                />
                <label htmlFor="name">User Name:</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              disabled={!form.name.trim()}
              onClick={loginHandler}
            >
              Log In!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  logIn: (name: string) => dispatch(actionCreator.login(name)),
});

export default connect(null, mapDispatchToProps)(AuthPage);
