import React, { PureComponent } from "react";
import "./Forms.scss";

export class Signup extends PureComponent {
  state = {
    username: "",
    password: "",
    confirmPw: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };

  render() {
    const { username, password, confirmPw } = this.state;
    return (
      <form className="form signup-form" onSubmit={this.onFormSubmit}>
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
        <label>confirm password:</label>
        <input
          name="confirmPw"
          value={confirmPw}
          type="password"
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          disabled={!username || !password || password !== confirmPw}
        >
          Submit
        </button>
        <p>
          Already have an account?
          <button onClick={this.props.toggleForms}>sign in</button>
        </p>
      </form>
    );
  }
}
