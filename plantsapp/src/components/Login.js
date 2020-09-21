import React from "react";
import { Button, Spinner } from "reactstrap";
const Login = ({ isFetching, requestLogin }) => {
  const userLogin = {
    username: "donavyn",
    password: "hunter1",
  };

  if (isFetching) {
    return <Spinner type="grow" color="success" />;
  }
  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          requestLogin(userLogin);
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
