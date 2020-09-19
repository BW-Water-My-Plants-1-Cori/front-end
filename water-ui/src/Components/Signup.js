import React, { useState, Component } from "react";
import styled from 'styled-components'

const StyledDiv = styled.button`
      color: ${(pr) => pr.theme.blue};
      border-radius: 5px;
      justify-content: center;
`

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Join Us!</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

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
      <StyledDiv>
        <button type="submit" className="btn btn-primary btn-block">
        Sign Up<a href="https://amazing-mestorf-988b56.netlify.app/">.</a>
        </button>
      </StyledDiv>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
