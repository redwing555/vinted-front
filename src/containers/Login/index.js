import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
        const token = response.data.token;
        setUser(token);
        history.push("/");
      }
    } catch (error) {
      setError(error.response.data.message || error.response.data.error);
    }
  };
  return (
    <>
      <section className="login-form">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" onChange={handleEmail} value={email} />
          <input type="password" onChange={handlePassword} value={password} />
          <input type="submit" value="Se connecter" />
        </form>
        <p>{error}</p>
        <Link to="signup">
          <p>Pas de compte ? Cliquez ici pour vous connecter</p>
        </Link>
      </section>
    </>
  );
};

export default Login;
