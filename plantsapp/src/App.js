import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// Components
import Home from "./components/Home";
import Plants from "./components/Plants";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { connect } from "react-redux";
import { requestLogin } from "./actions";

function App(props) {
  return (
    <div className="App">
      <nav>
        <h1>Water My Plants</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home
              isFetching={props.isFetching}
              requestLogin={props.requestLogin}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/plants">
            <Plants />
          </Route>
          <Route path="/plants/:id"></Route>
        </Switch>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadedPlant: state.loadedPlant,
    plants: state.plants,
    error: state.error,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps, { requestLogin })(App);
