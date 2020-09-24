import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import "./schemaSignup.js";
import { useHistory } from "react-router-dom";

//import Axios from 'axios'

const StyledDiv = styled.button`
  color: ${(pr) => pr.theme.blue};
  border-radius: 5px;
  justify-content: center;
`;

/*axios
      .post('https://waterplantsunit4.herokuapp.com/register')
      .then(res => {
        console.log("Form -> res", res.data)
        setPost([...post, res.data])
        setFormState({
          first name: '',
          last name: '',
          email address: '',
          password: ''
        })
        setServerError(null)
      })
      .catch(err => {
        setServerError("There is an error!")
      }) */

const SignUp = ({ requestSignup }) => {
  // Mock data until form is fully functional
  const history = useHistory();
  const mockUser = {
    username: "donavynhaley6",
    phonenumber: "(300)566-8891",
    email: "donavynhaley6@gmail.com",
    password: "password6",
    first_name: "donavyn",
    last_name: "haley",
  };
  const mockHandleSubmit = () => {
    requestSignup(mockUser);
    history.push("/login");
  };
  // -----------------------------------------

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [FormControl] = useState("");
  const [password, setPassword] = useState("");

  function performValidation() {
    return firstName.length > 0 && lastName.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="auth-wrapper">
      <form className="auth-inner">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
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

        <StyledDiv>
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </StyledDiv>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
      <Button color="primary" onClick={mockHandleSubmit}>
        Mock Signup
      </Button>
    </div>
  );
};

export default SignUp;
