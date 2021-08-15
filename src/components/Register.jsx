import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function Register() {
  return (
    <div>
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="Confirm password" />
      <Button type="submit" value="Register" />
    </div>
  );
}

export default Register;
