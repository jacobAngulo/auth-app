import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  state = {
    username: "george",
    password: "password"
  };
  render() {
    return (
      <>
        <p>login</p>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanges}
            value={this.state.username}
            type="text"
            name="username"
          />
          <input
            onChange={this.handleChanges}
            value={this.state.password}
            type="password"
            name="password"
          />
          <input type="submit" />
        </form>
      </>
    );
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = "http://localhost:8000/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("LOGIN RESPONSE", res);
        localStorage.setItem("token", res.data.token);
      })
      .catch(error => {
        console.error("LOGIN ERROR", error);
      });
  };
}

export default Login;
