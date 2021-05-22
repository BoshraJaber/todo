import React, { useContext, useState } from "react";
import { If, Else, Then } from "react-if";
import { LoginContext } from "./context";

const SignUp = () => {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }


  function handleChangeRole(e) {
    setRole(e.target.value);
  }

  function handleSubmitSignup(e) {
    e.preventDefault();
    context.signup( username, password, role);
  }

  return (
    <form onSubmit={handleSubmitSignup}>

      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChangeUsername}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChangePassword}
      />

      <select name="roles" id="roles" onChange={handleChangeRole}>
        <option value="user">User</option>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>

      <button>SignUp</button>
    </form>
  );
};

export default SignUp;
