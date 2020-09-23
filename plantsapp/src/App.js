import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Spinner } from "reactstrap";
// Components
import Home from "./components/Home";
import Plants from "./components/Plants";
import PlantCard from "./components/PlantCard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddPlant from "./components/AddPlant";
import LoadedPlant from "./components/LoadedPlant";
// Redux
import { connect } from "react-redux";
import {
  addPlant,
  getPlantByID,
  requestSignup,
  requestLogin,
  updatePlant,
} from "./actions";

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
        {
          //Shows Loading in the content field if is fetching is true
          !props.isFetching ? (
            <Switch>
              <Route exact path="/">
                <AddPlant addPlant={props.addPlant} userID={props.user.id} />
                <Plants
                  plants={props.plants}
                  getPlantByID={props.getPlantByID}
                />
              </Route>
              <Route path="/login">
                <Login
                  requestLogin={props.requestLogin}
                  isFetching={props.isFetching}
                />
              </Route>
              <Route path="/signup">
                <Signup
                  requestSignup={props.requestSignup}
                  isFetching={props.isFetching}
                />
              </Route>
              <Route exact path="/plants">
                <Plants />
              </Route>
              <Route path="/plants/:id">
                <LoadedPlant
                  plant={props.loadedPlant}
                  updatePlant={props.updatePlant}
                />
              </Route>
            </Switch>
          ) : (
            <Spinner
              color="info"
              id="loading-spinner"
              style={{ width: "5rem", height: "5rem" }}
            />
          )
        }
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadedPlant: state.loadedPlant,
    plants: state.plants,
    error: state.error,
    user: state.user,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps, {
  requestLogin,
  requestSignup,
  addPlant,
  getPlantByID,
  updatePlant,
})(App);
