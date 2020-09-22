import React, { useState, Component } from "react"
import { FormControl } from "bootstrap"
//import $ from "jquery";
import styled from "styled-components"
import "../styles/index.css"
import * as Yup from 'yup'

const StyledDiv = styled.button`
  color: ${(pr) => pr.theme.blue};
  border-radius: 5px;
  justify-content: center;
`;

const formSchema = Yup.object().shape({
    username: 
      Yup.string()
      .username("Must be a valid username.")
      .required("Must include username."),
    password: 
      Yup.string()
      .min(6, "Passwords must be at least 6 characters long.")
      .required("Password is Required.")

      // required isn't required for checkboxes.
  });

  function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
        function performValidation() {
            return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form>
      <h3>Sign In</h3>

      <div className="form-group">
          <label>Username</label>
          <input type="email" className="form-control" placeholder="Enter username" />
      </div>
          <FormControl
              autoFocus
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
          />
      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
          <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
          />
      </div>

      <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox"    className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
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
    );
  }

export default Login;

    
        
        


