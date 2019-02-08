import React, { PureComponent } from "react";
import "./Forms.scss";

export class Login extends PureComponent {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  render() {
    const { username, password } = this.state;
    return (
      <form className="form login-form" onSubmit={this.onFormSubmit}>
        <label>username:</label>
        <input
          name="username"
          value={username}
          type="text"
          onChange={this.handleInputChange}
        />
        <label>password:</label>
        <input
          name="password"
          value={password}
          type="password"
          onChange={this.handleInputChange}
        />
        <button type="submit" disabled={!username || !password}>
          Submit
        </button>
        <p>
          Don't have an account?
          <button onClick={this.props.toggleForms}>create one</button>
        </p>
      </form>
    );
  }
}
