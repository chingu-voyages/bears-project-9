import React, { Component, Fragment } from 'react';
import Modal from "../../components/Modal/Modal";
import { AddWatch } from "../../components/Forms";
import { ButtonArray, WatchTable } from "../../components/AdminElements";
import { API } from "../../utils";
import "./Admin.sass";

class Admin extends Component {
  state = {
    users: false,
    userForm: false,
    watches: true,
    watchForm: false
  }

  toggleDisplay = toShow => {
    console.log(toShow);
    const newState = {
      users: false,
      userForm: false,
      watches: false,
      watchForm: false
    };
    newState[toShow] = true;
    this.setState(newState);
  }

  render() {
    const { users, userForm, watches, watchForm } = this.state;
    return (
      <Modal>
        {modalProps => (
          <Fragment>
            <h2 className="admin__title">Admin Page</h2>
            <ButtonArray
              className="admin__btn-wrapper"
              state={this.state}
              toggleDisplay={this.toggleDisplay}
            />

            {watches && (
              <WatchTable
                {...modalProps}
                fetchWatches={this.props.fetchWatches}
                watchData={this.props.watchData}
              />
            )}

            {watchForm && (
              <AddWatch />
            )}

            {users && (
              "Here are all the users."
            )}

            {userForm && (
              "Do you want to add a new user?"
            )}

          </Fragment>
        )}
      </Modal>
    );
  }
}

export default Admin;