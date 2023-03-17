import React, { Component } from "react";
import Add from '../img/addAvatar.png';

export class Register extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Super Chat</span>
          <span className="title">Register</span>
          <form>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="Tambahkan Avatar" />
              <span>Tambahkan Avatar</span>
            </label>
            <button>Sign Up</button>
            <p>sudah punya akun? Login</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
