import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Spinner, UncontrolledAlert } from "reactstrap";
// Components
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddPlant from "./components/AddPlant";
import LoadedPlant from "./components/LoadedPlant";
import LoadedUser from "./components/LoadedUser";
// Redux
import { connect } from "react-redux";
import {
  addPlant,
  getPlantByID,
  requestSignup,
  requestLogin,
  updatePlant,
  deletePlant,
  updateUser,
  deleteUser,
  updatePlantWater,
} from "./actions";
// Utils
import PrivateRoute from "./utils/PrivateRoute";
function App(props) {
  return (
    <div className="App">
      {props.error.length > 0 ? (
        <UncontrolledAlert color="danger">
          ERROR: {props.error}
        </UncontrolledAlert>
      ) : null}
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
          {Object.keys(props.user).length != 0 ? (
            <>
              <li>
                <AddPlant addPlant={props.addPlant} userID={props.user.id} />
              </li>
              <li>
                <LoadedUser
                  user={props.user}
                  updateUser={props.updateUser}
                  deleteUser={props.deleteUser}
                />
              </li>
            </>
          ) : null}
        </ul>
      </nav>
      <div className="content">
        {
          //Shows Loading in the content field if is fetching is true
          !props.isFetching ? (
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Home}
                userLevel={props.user.level}
                userXP={props.user.experience}
                plants={props.plants}
                getPlantByID={props.getPlantByID}
                updatePlantWater={props.updatePlantWater}
              />
              <Route path="/login">
                <Login requestLogin={props.requestLogin} />
              </Route>
              <Route path="/signup">
                <Signup requestSignup={props.requestSignup} />
              </Route>
              <Route path="/plants/:id">
                <LoadedPlant
                  plant={props.loadedPlant}
                  updatePlant={props.updatePlant}
                  deletePlant={props.deletePlant}
                />
              </Route>
            </Switch>
          ) : (
            <div id="loading-spinner-container">
              <Spinner id="loading-spinner" color="info" />
            </div>
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
  deletePlant,
  updateUser,
  deleteUser,
  updatePlantWater,
})(App);
