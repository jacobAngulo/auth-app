import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </>
    );
  }
}

export default App;
