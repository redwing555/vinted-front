import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
const ModalSignUp = ({ setUser, setModalSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const handleClick = () => {
    setModalSignUp(false);
  };

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
        setModalSignUp(false);
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
            <input type="submit" value="Se connecter" />
          </form>
          <div>
            <p className="error-message">{error}</p>
          </div>
          <FontAwesomeIcon onClick={handleClick} icon="times" />
        </div>
      </section>
    </>
  );
};

export default ModalSignUp;
