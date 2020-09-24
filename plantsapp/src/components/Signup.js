import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import "./schemaSignup.js";
import { useHistory } from "react-router-dom";

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

const Signup = ({ requestSignup }) => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    requestSignup(formData);
    history.push("/login");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-inner" onSubmit={(e) => handleSubmit(e)}>
        <h3>Please Sign Up!</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>PhoneNumber</label>
          <input
            className="form-control"
            type="tel"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <Button color="brown">Submit</Button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};
export default Signup;
