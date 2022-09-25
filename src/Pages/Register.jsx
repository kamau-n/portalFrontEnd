import axios from "axios";
import React, { useState } from "react";
import "../index.css";

function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(username, password);
    axios
      .post("http://localhost:8000/register", {
        email: username,
        password: password,
        gender: gender,
        email: email,
        county: gender,
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
      <h2 className="text-center  text-1xl">Register </h2>
      <div className="w-80 m-auto p-10">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username "
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter your email Address"
            className="border-1 outline-none rounded"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Enter your gender "
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Enter your address "
            onChange={(e) => {
              setAddress(e.target.value);
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
