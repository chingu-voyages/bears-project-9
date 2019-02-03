import React, { Component } from 'react';

export class ButtonArray extends Component {

  render() {
    const { users, userForm, watches, watchForm } = this.props.state;
    return (
      <div className={this.props.className}>
      <button
        disabled={watchForm}
        onClick={() => this.props.stateChange("watchForm")}>
        Add Watch
       </button>
      <button
        disabled={userForm}
        onClick={() => this.props.stateChange("userForm")}>
        Add User
       </button>
      <button
        disabled={watches}
        onClick={() => this.props.stateChange("watches")}>
        Watches
       </button>
      <button
        disabled={users}
        onClick={() => this.props.stateChange("users")}>
        Users
       </button>
    </div>
    );
  }
}