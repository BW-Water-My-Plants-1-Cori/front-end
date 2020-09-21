import React, { useEffect } from "react";
import { Spinner } from "reactstrap";

const Home = ({ isFetching, requestLogin }) => {
  // Temporary login request until login/signup page is created
  const userRegister = {
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
    requestLogin(userLogin);
  }, []);

  // Will update user if fetching data from backend
  if (isFetching) {
    return <Spinner type="grow" color="success" />;
  }
  return <div>Home</div>;
};

export default Home;
