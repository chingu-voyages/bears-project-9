import React, { Component, Fragment } from 'react';
import { Login, Signup } from '../../components/Forms';

class Authenticate extends Component {
  state = {
    loginForm: true
  }

  toggleForms = () => {
    this.setState({ loginForm: !this.state.loginForm });
  }

  render() {
    if (this.props.loggedIn) this.props.history.goBack();
    return (
      <Fragment>
        {this.state.loginForm
          ? (
            <Login
              login={this.props.login}
              toggleForms={this.toggleForms}
            />
          ) : (
            <Signup
              signup={this.props.signup}
              toggleForms={this.toggleForms}
            />
          )}
      </Fragment>
    );
  }
}

export default Authenticate;