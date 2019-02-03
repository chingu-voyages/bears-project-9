import React, { Component } from 'react';

export class ButtonArray extends Component {

  render() {
    const { users, userForm, watches, watchForm } = this.props.state;
    return (
      <div className={this.props.className}>
      <button
        disabled={watchForm}
        onClick={() => this.props.toggleDisplay("watchForm")}>
        Add Watch
       </button>
      <button
        disabled={userForm}
        onClick={() => this.props.toggleDisplay("userForm")}>
        Add User
       </button>
      <button
        disabled={watches}
        onClick={() => this.props.toggleDisplay("watches")}>
        Watches
       </button>
      <button
        disabled={users}
        onClick={() => this.props.toggleDisplay("users")}>
        Users
       </button>
    </div>
    );
  }
}