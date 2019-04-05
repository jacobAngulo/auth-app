import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

axios.interceptors.request.use(function(requestConfig) {
  const token = localStorage.getItem("token");
  requestConfig.headers.authorization = token;
  return requestConfig;
});

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("token");
      const notLoggedIn = <h1>Please log in</h1>;
      //   axios.create({ headers: { authorization: token } });

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
