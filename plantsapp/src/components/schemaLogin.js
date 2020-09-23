//import React, { useState } from "react"
import * as Yup from 'yup'

//const [schemaLogin] = useState("");

function schemaLogin(props) {
    return schemaLogin;
}

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

  export default schemaLogin; 
