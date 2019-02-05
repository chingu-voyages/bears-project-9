import React, { PureComponent } from 'react';
import "./Forms.scss";

export class Login extends PureComponent {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="form login-form">
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
        <button
          disabled={!username || !password}
          onClick={() => this.props.login({ username, password })}
        >
          Submit
        </button>
        <p>Don't have an account? 
          <button onClick={this.props.toggleForms}>create one</button>
        </p>
      </div>
    );
  }
}