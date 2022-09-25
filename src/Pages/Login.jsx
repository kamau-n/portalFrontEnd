import axios from "axios";
import React, { useState } from "react";
import "../index.css";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(username, password);
    axios
      .post("http://localhost:8000/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log("a post request has been sent to the localhost");
      })
      .catch((err) => {
        //alert("there is an error that occured");
        console.log("there is an error in the connection" + err);
      });
  };
  return (
    <div>
      <h2 className="text-center text-2xl">Student Portal </h2>
      <h2 className="text-center  text-1xl">Login </h2>
      <div className="w-80 m-auto p-10">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email Address"
            className="border-1 outline-none rounded"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-blue-700 p-2 text-white font-mono">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
