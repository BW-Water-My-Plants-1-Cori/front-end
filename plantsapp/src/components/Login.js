import React, { useState, Component } from "react";
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

const Login = ({ requestLogin, isFetching }) => {
  const mockUser = {
    "username": "donavynhaley2",
    "password": "password",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    requestLogin(mockUser);
  };
  return (
    <div className="auth-wrapper">
      <form className="auth-inner" onSubmit={(e) => handleSubmit(e)}>
        <h3>Welcome Back!</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
            Sign In
          </button>
        </StyledDiv>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
