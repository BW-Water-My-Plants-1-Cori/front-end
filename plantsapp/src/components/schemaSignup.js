//import React, { useState } from "react"
import * as Yup from 'yup'

//const [schemaSignup] = useState("");

function schemaSignup(props) {
    return schemaSignup;
}

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
  
  export default schemaSignup;