import React from "react";
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, loginFailed: false,};

  handleRegister = (user, history) => {
    axios
      .post("/api/auth", user)
      .then(res => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch(res => {
        console.log(res);
      });
  };

  handleLogin = (user, history) => {
    axios
    .post("/api/auth/sign_in", user)
    .then(res => {
      this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch(res => {
        // If this hits, show error on login page. 
        this.errorLoginHandling()
        console.log(res);
      });
    };

  errorLoginHandling = () => {
    this.setState({loginFailed: true})
    setTimeout(
      function() {
        this.setState({ loginFailed: false });
      }.bind(this),
      5000
    );
  }

  handleLogout = history => {
    axios
      .delete("/api/auth/sign_out")
      .then(res => {
        this.setState({ user: null });
        history.push("/");
      })
      .catch(res => {
        console.log(res);
      });
  };

  updateUser = (id, user) => {
    let data = new FormData();
    data.append("file", user.file);
    axios
      .put(`/api/users/${id}?name=${user.name}&email=${user.email}`, data)
      .then(res => this.setState({ user: res.data }))
      // .catch(
      //   res => {alert("File size was too large.")}
      // )
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticated: this.state.user !== null,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          setUser: user => this.setState({ user }),
          updateUser: this.updateUser,
          loginFailed: this.state.loginFailed,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
