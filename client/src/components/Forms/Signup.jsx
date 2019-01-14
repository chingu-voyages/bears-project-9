import React, { Component } from 'react';
import "./Forms.scss";

export class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPw: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, confirmPw } = this.state;
    return (
      <div className="form signup-form">
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
          disabled={
            !username
            || !password
            || (password !== confirmPw)
          }
          onClick={() => this.props.signup({ username, password })}
        >
          Submit
        </button>
        <p>Already have an account?
          <button onClick={this.props.toggleForms}>sign in</button>
        </p>
      </div>
    );
  }
}