import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/index";

const SignUp = () => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (ev) => {
    setUsername(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const data = {
        username: username,
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        data
      );

      if (response.status === 200) {
        history.push("/");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Header />
      <section className="login-form">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleUsername} value={username} />
          <input type="email" onChange={handleEmail} value={email} />
          <input type="password" onChange={handlePassword} value={password} />
          <input type="submit" value="S'inscrire" />
        </form>
      </section>
    </>
  );
};

export default SignUp;
