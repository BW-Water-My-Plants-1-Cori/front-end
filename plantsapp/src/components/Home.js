import React, { useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
const Home = (props) => {
  // Code
  const user = {
    username: "donavyn",
    phonenumber: "(123)456-7891",
    email: "donavynhaley@gmail.com",
    password: "hunter1",
    first_name: "donavyn",
    last_name: "haley",
    experience: "some",
    level: "1",
  };
  const userLogin = {
    username: "donavyn",
    password: "hunter1",
  };
  useEffect(() => {
    axiosWithAuth()
      .post("/login", userLogin)
      .then((res) => {
        console.log(res);
      });
  });
  return <div>Home</div>;
};

export default Home;
