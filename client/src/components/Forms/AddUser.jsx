import React, { PureComponent } from "react";
import Spinner from "../Spinner/Spinner";
import { API } from "../../utils";
import "./Forms.scss";

export class AddUser extends PureComponent {
  state = {
    username: "",
    password: "",
    admin: false,
    loading: false
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = event.target;
    this.setState({ [name]: value });
  };

  createUser = async event => {
    event.preventDefault();
    await this.setState({ loading: true });
    const userData = { ...this.state };
    const headers = this.props.buildHeaders();
    await API.adminCreateUser(userData, headers);
    const newState = {
      username: "",
      password: "",
      admin: false,
      loading: false
    };
    await this.props.fetchUsers();
    setTimeout(() => this.setState(newState), 500);
  };

  render() {
    const { password, username } = this.state;
    const spinner = (
      <Spinner
        style={{ height: "15px", width: "15px", display: "inline-block" }}
      />
    );
    return (
      <form className="form user-form" onSubmit={this.createUser}>
        <label>Username:</label>
        <input
          name="username"
          value={this.state.username}
          type="text"
          onChange={this.handleInputChange}
        />
        <label>Password:</label>
        <input
          name="password"
          value={this.state.password}
          type="text"
          onChange={this.handleInputChange}
        />
        <label>Admin?</label>
        <input
          name="admin"
          type="checkbox"
          checked={this.state.admin}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          className="user-form_submit"
          disabled={this.state.loading || (!username || !password)}
        >
          {this.state.loading ? spinner : "Submit"}
        </button>
      </form>
    );
  }
}
