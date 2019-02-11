import React, { Component } from 'react';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { Login, Signup } from '../../components/Forms';

class Authenticate extends Component {
  state = {
    loginForm: true
  }

  toggleForms = () => {
    this.setState({ loginForm: !this.state.loginForm });
  }

  render() {
    if (this.props.sharedProps.loggedIn) this.props.history.goBack();
    return (
      <PageWrapper {...this.props.sharedProps}>
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
      </PageWrapper>
    );
  }
}

export default Authenticate;