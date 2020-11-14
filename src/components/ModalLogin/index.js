import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalLogin = ({ setUser, setModalLogin, setModalSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    setModalLogin(false);
    setModalSignUp(true);
    document.body.style.overflow = "hidden";
  };

  const handleClick = () => {
    setModalLogin(false);
    document.body.style.overflow = "";
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
        setModalLogin(false);
        document.body.style.overflow = "";
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
            <p className="signup-text" onClick={handleSignUp}>
              Pas de compte ? Cliquez ici pour vous inscrire
            </p>
          </div>
          <FontAwesomeIcon onClick={handleClick} icon="times" />
        </div>
      </section>
    </>
  );
};

export default ModalLogin;
