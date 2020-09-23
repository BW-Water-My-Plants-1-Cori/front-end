import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

//import Axios from 'axios'

const StyledDiv = styled.button`
  color: ${(pr) => pr.theme.blue};
  border-radius: 5px;
  justify-content: center;
`;

/*axios
      .post('https://waterplantsunit4.herokuapp.com/login')
      .then(res => {
        console.log("Form -> res", res.data)
        setPost([...post, res.data])
        setFormState({
          username: '',
          password: ''
        })
        setServerError(null)
      })
      .catch(err => {
        setServerError("There is an error!")
      }) */

const Login = ({ requestLogin }) => {
  // Mock code unitl login is functional
  const mockUser = {
    username: "donavynhaley2",
    password: "password",
  };
  const mockHandleSubmit = () => {
    requestLogin(mockUser);
  };
  // ---------------------------------
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function performValidation() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="auth-wrapper">
      <form className="auth-inner" onSubmit={(e) => handleSubmit(e)}>
        <h3>Welcome Back!</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            placeholder="Enter username"
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <StyledDiv>
          <button type="submit" className="btn btn-primary btn-block">
            Sign In<a href="https://waterplantsunit4.herokuapp.com/login">.</a>
          </button>
        </StyledDiv>

        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      <Button color="primary" onClick={mockHandleSubmit}>
        {" "}
        MOCK LOGIN
      </Button>
    </div>
  );
};

export default Login;
