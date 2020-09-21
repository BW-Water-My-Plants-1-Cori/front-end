import React from "react";
import { Button, Spinner } from "reactstrap";

const Signup = ({ isFetching, requestSignup }) => {
  // Code
  const userRegister = {
    username: "donavyn",
    phonenumber: "(123)456-7891",
    email: "donavynhaley@gmail.com",
    password: "hunter1",
    first_name: "donavyn",
  };

  if (isFetching) {
    return <Spinner type="grow" color="success" />;
  }
  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          requestSignup(userRegister);
        }}
      >
        Signup
      </Button>
    </div>
  );
};

export default Signup;
