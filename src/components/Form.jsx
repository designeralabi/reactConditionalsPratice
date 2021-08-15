import React from "react";
import Login from "../components/Login";
import Register from "./Register";

function Form(props) {
  return (
    <form className="form">{props.isUser ? <Login /> : <Register />}</form>
  );
}

export default Form;
