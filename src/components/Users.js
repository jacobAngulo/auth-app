import React, { Component } from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

export class Users extends Component {
  state = {
    users: []
  };
  render() {
    return (
      <>
        <p>users</p>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount = () => {
    const endpoint = "/users";
    // const token = localStorage.getItem("token");
    // const requestConfig = {
    //   headers: {
    //     authorization: token
    //   }
    // };
    axios
      .get(endpoint)
      .then(res => {
        console.log(res.data);
        this.setState({
          users: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export default requiresAuth(Users);
