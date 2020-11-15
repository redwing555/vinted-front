import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Login = ({ setUser }) => {
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
      }
    } catch (error) {
      setError(error.response.data.message || error.response.data.error);
    }
  };
  return (
    <>
      <section className="login-form">
        <div className="container">
          <h2>Se connecter</h2>
          <form onSubmit={handleSubmit}>
            <input
              className={error !== "" ? "input-error" : "input-modal"}
              type="email"
              onChange={handleEmail}
              value={email}
              placeholder="Adresse email"
            />
            <input
              className={error !== "" ? "input-error" : "input-modal"}
              type="password"
              onChange={handlePassword}
              value={password}
              placeholder="Mot de passe"
            />
            <input type="submit" value="Se connecter" />
          </form>
          <div>
            <p className="error-message">{error}</p>
          </div>
          <div>
            <Link className="signup-text" to="/signup">
              Pas de compte ? Cliquez ici pour vous inscrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
