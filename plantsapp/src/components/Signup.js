import React, { useState } from "react"
import styled from "styled-components"
import * as Yup from 'yup'
//import Axios from 'axios'

const StyledDiv = styled.button`
  color: ${(pr) => pr.theme.blue};
  border-radius: 5px;
  justify-content: center;
`;

const formSchema = Yup.object().shape({
  
  firstName: Yup
    .string()
    .min(3, "First name must be at least 3 characters long.")
    .required("First name is required."),
  lastName: Yup
    .string()
    .min(3, "Last name must be at least 3 characters long.")
    .required("Last name is required."),
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required"),
  
    // required isn't required for checkboxes.
});


function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [FormControl, setFormControl] = useState("");
  const [password, setPassword] = useState("");
    
  function performValidation() {
      return firstName.length > 0 && lastName.length > 0;
          
    }
  function handleSubmit(event) {
      event.preventDefault();
    }

  
  return (
    <form>
       <h3>Sign Up</h3>

          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" />
              <FormControl
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  type="firstName"
              />
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
              <FormControl
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  type="lastName"
              />
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
                  <FormControl
                      value={emailAddress}
                      onChange={e => setEmailAddress(e.target.value)}
                      type="emailAddress"
                  />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
              <FormControl
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
              />
          </div>

          <StyledDiv>
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up<a href="https://waterplantsunit4.herokuapp.com/register">.</a>
            </button>
          </StyledDiv>
              <p className="forgot-password text-right">
                   Already registered <a href="#">sign in?</a>
              </p>
    </form>
  );
}

export default Signup;


/*

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

