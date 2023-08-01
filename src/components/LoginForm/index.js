import React, { Component } from "react";
import Admin from "../Admin";
import User from "../User";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    userType: localStorage.getItem("userType") || "", 
    showError: false,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = () => {
    const { email, password } = this.state;

    if (email === "admin@gmail.com" && password === "Admin@123") {
      this.setState({ userType: "admin", showError: false });
      localStorage.setItem("userType", "admin"); 
    } else if (email === "jane.doe@gmail.com" && password === "janedoe@123") {
      this.setState({ userType: "user", showError: false });
      localStorage.setItem("userType", "user");
      this.setState({ userType: "", showError: true });
      localStorage.removeItem("userType"); 
    }
  };

  handleLogout = () => {
    this.setState({ userType: "" });
    localStorage.removeItem("userType"); 
  };

  render() {
    const { userType, showError } = this.state;

    return (
      <div>
        {userType === "" ? (
          <div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <button onClick={this.handleLogin}>Login</button>
              {showError && <p>Invalid credentials. Please try again.</p>}
            </div>
          </div>
        ) : (
          <>
            {userType === "admin" ? (
              <Admin handleLogout={this.handleLogout} />
            ) : (
              <User handleLogout={this.handleLogout} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default LoginForm;
