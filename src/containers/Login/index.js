import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/index";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

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
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        data
      );

      if (response.status === 200) {
        history.push("/");
      } else {
        alert("Mdps mauvais !");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Header />
      <section className="login-form">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" onChange={handleEmail} value={email} />
          <input type="password" onChange={handlePassword} value={password} />
          <input type="submit" value="Se connecter" />
        </form>
        <Link to="signup">
          <p>Pas de compte ? Cliquez ici pour vous connecter</p>
        </Link>{" "}
      </section>
    </>
  );
};

export default Login;
