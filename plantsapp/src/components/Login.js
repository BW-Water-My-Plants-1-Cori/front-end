import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//import Axios from 'axios'

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
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    requestLogin(formData);
    history.push("/");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  /* function performValidation() {
    return username.length > 0 && password.length > 0;
  }*/

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
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={formData.password}
            name="password"
            onChange={(e) => handleChange(e)}
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

        <Button color="brown">Sign In</Button>

        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
