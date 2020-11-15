import React, { useState } from "react";
import axios from "axios";
import "./index.css";
const SignUp = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePhone = (ev) => {
    setPhone(ev.target.value);
  };

  const handleUsername = (ev) => {
    setUsername(ev.target.value);
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
          <h2>S'inscrire</h2>
          <form onSubmit={handleSubmit}>
            <input
              className={error !== "" ? "input-error" : "input-modal"}
              type="text"
              onChange={handleUsername}
              value={username}
              placeholder="Pseudo"
            />
            <input
              className={error !== "" ? "input-error" : "input-modal"}
              type="email"
              onChange={handleEmail}
              value={email}
              placeholder="Adresse email"
            />
            <input
              type="text"
              className={error !== "" ? "input-error" : "input-modal"}
              onChange={handlePhone}
              value={phone}
              placeholder="Téléphone"
            />
            <input
              className={error !== "" ? "input-error" : "input-modal"}
              type="password"
              onChange={handlePassword}
              value={password}
              placeholder="Mot de passe"
            />
            <input type="checkbox" value="S'inscrire à notre newsletter" />
            <p className="cgu">
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
            <input type="submit" value="Se connecter" />
          </form>
          <div>
            <p className="error-message">{error}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
