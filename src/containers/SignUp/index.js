import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./index.css";
const SignUp = ({ setUser, apiUrl }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
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
      const response = await axios.post(`${apiUrl}/user/signup`, {
        username: username,
        email: email,
        password: password,
      });

      if (response.data.token) {
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
        <div className="container">
          <h2>S'inscrire</h2>
          <form onSubmit={handleSubmit}>
            <input
              className={error !== "" ? "input-error" : "input-modal"}
              type="text"
              onChange={handleUsername}
              value={username}
              placeholder="Nom d'utilisateur"
            />
            <input
              className={error !== "" ? "input-error" : "input-modal"}
              type="email"
              onChange={handleEmail}
              value={email}
              placeholder="Email"
            />
            <input
              className={error !== "" ? "input-error" : "input-modal"}
              type="password"
              onChange={handlePassword}
              value={password}
              placeholder="Mot de passe"
            />
            <div className="newsletter">
              <input type="checkbox" />
              <p>S'inscrire à notre newsletter</p>
            </div>
            <p className="cgu">
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>

            <input type="submit" value="S'inscrire" />
          </form>
          <div>
            <Link className="signup-text" to="/login">
              Tu as déjà un compte ? Connecte-toi !
            </Link>
          </div>
          <div>
            <p className="error-message">{error}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
