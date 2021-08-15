import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function Login() {
  return (
    <div>
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Button type="submit" value="Login" />
    </div>
  );
}

export default Login;
