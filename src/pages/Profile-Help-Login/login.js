import React, { Component } from "react";
import "./login.css";

import Cookies from "js-cookie"; // Importation de la bibliothèque js-cookie

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    const { email, password } = this.state;

    // Envoyer les informations d'identification au backend
    fetch(process.env.REACT_APP_BACKEND_URL + "/login" + "/login", {
      // Assurez-vous que l'URL soit correcte
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          // La connexion est réussie, rediriger l'utilisateur
          response.json().then((data) => {
            // Stockage du token JWT dans un cookie sécurisé et des informations dans le localStorage
            localStorage.setItem("userId", data.userId);
            localStorage.setItem("userName", data.userName);
            localStorage.setItem("firstName", data.firstName);
            localStorage.setItem("email", data.email);
            localStorage.setItem("do_ids", data.do_ids);
            localStorage.setItem("sponsored", data.sponsored);
            Cookies.set("token", data.token, {
              secure: true,
              sameSite: "Strict",
            }); // Stockage du token JWT dans un cookie sécurisé

            // Redirection en fonction du premier login
            if (data.first_connection === 0) {
              window.location.href = "/"; // Redirection vers la page d'accueil
            } else {
              window.location.href = "/"; // Redirection vers la page de bienvenue
            }
          });
        } else {
          // Afficher un message d'erreur en cas d'identifiants incorrects
          this.setState({
            errorMessage: "Identifiant ou mot de passe incorrect.",
          });
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion :", error);
        this.setState({
          errorMessage: "Erreur de connexion, veuillez réessayer.",
        });
      });
  };

  render() {
    return (
      <div className="login-container">
        <div className="background-image"></div>
        <div className="account">
          <p className="empower-text" style={{ marginLeft: "10vw" }}>
            Get your team on the same boat, and
            <br />
            they will be as motivated and engaged
            <br />
            as you are
          </p>
          <p className="TheWork-text">
            <span style={{ color: "aqua" }}>Thankward</span> in three sentences
            <br />
            1 - A universal and systemic wealth-creation model that
            <br />
            simplifies the journey towards a successful life for deserving
            <br />
            individuals
            <br />
            2 - Values of recognition and trust that enable free and fair
            <br />
            progress toward prosperity
            <br />
            3 - A cutting-edge intuitive tech platform that makes the
            <br />
            process actionable, enjoyable, and highly powerful
          </p>
          <p className="Exclusively">Exclusively by cooptation</p>
          <p className="AlreadyMember">Already a Member?</p>
        </div>

        <form className="forme">
          <div className="form-group">
            <p className="MailAdress" style={{ fontSize: "2.5vh" }}>
              Your Email
            </p>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form-group">
            <p className="Password" style={{ fontSize: "2.5vh" }}>
              Your Password
            </p>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          {this.state.errorMessage && (
            <p
              className="error-message"
              style={{ color: "red", fontSize: "1.8vh" }}
            >
              {this.state.errorMessage}
            </p>
          )}
          <button
            className="buttonLogin"
            type="button"
            onClick={this.handleLogin}
          >
            Welcome ➡
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
