import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = ({ setUser }) => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
        const token = response.data.token;
        setUser(token);
        history.push("/");
      }
    } catch (error) {
      setError(error.response.data.message || error.response.data.error);
    }
  };
  return (
    <section className="SignUp-form">
      <div className="container">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleUsername}
            value={username}
            placeholder="Pseudo"
          />
          <input
            type="email"
            onChange={handleEmail}
            value={email}
            placeholder="Adresse e-mail"
          />
          <input
            type="password"
            onChange={handlePassword}
            value={password}
            placeholder="Password"
          />
          <input type="submit" value="S'inscrire" />
        </form>
        <p>{error}</p>
      </div>
    </section>
  );
};

export default SignUp;
