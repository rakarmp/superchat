import React, { Component } from "react";

export class Login extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Super Chat</span>
          <span className="title">Login</span>
          <form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign in</button>
            <p>Tidak punya akun? Register</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
