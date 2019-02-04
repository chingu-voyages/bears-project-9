import React, { Component, Fragment } from 'react';
import Modal from "../../components/Modal/Modal";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { AddUser, AddWatch } from "../../components/Forms";
import { ButtonArray, UserTable, WatchTable } from "../../components/AdminElements";
import { API } from "../../utils";
import "./Admin.sass";

class Admin extends Component {
  state = {
    users: false,
    userData: '',
    userForm: false,
    watches: true,
    watchData: '',
    watchForm: false
  }

  async componentDidMount() {
    await this.fetchUsers();
  }

  fetchUsers = async () => {
    const res = await API.adminGetUsers();
    this.setState({ userData: res.data });
    return res.data;
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
    const { users, userData, userForm, watches, watchForm } = this.state;
    const { props } = this;
    console.log(userData);
    return (
      <PageWrapper {...props.sharedProps}>
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
                <AddWatch
                  fetchWatches={this.props.fetchWatches}
                  toggleDisplay={this.toggleDisplay}
                />
              )}

              {users && (
                <UserTable
                  {...modalProps}
                  fetchUsers={this.fetchUsers}
                  userData={this.state.userData}
                />
              )}

              {userForm && (
                <AddUser
                  fetchUsers={this.fetchUsers}
                  toggleDisplay={this.toggleDisplay}
                />
              )}

            </Fragment>
          )}
        </Modal>
      </PageWrapper>
    );
  }
}

export default Admin;