import React from "react";
import { Switch, Route, Link } from "react-router-dom";
function App() {
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

      <Switch>
        <Route path="/"></Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
        <Route path="/plants"></Route>
        <Route path="/plants/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
