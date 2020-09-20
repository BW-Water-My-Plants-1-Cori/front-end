import React, { useState, Component } from "react";
import styled from 'styled-components'

const StyledDiv = styled.button`
      color: ${(pr) => pr.theme.blue};
      border-radius: 5px;
      justify-content: center;
`

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Welcome Back!</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
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
        Sign In<a href="https://amazing-mestorf-988b56.netlify.app/">.</a>
        </button>
      </StyledDiv>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
   
  }
}


