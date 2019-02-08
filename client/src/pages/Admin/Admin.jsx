import React, { Component, Fragment } from "react";
import Modal from "../../components/Modal/Modal";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { AddUser, AddWatch } from "../../components/Forms";
import {
  ButtonArray,
  UserTable,
  WatchTable
} from "../../components/AdminElements";
import { API } from "../../utils";
import "./Admin.scss";

class Admin extends Component {
  state = {
    users: false,
    userData: "",
    userForm: false,
    watches: true,
    watchForm: false
  };

  async componentDidMount() {
    this.fetchUsers();
  }

  buildHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  fetchUsers = async () => {
    const headers = this.buildHeaders();
    console.log(headers);
    const res = await API.adminGetUsers(headers);
    await this.setState({ userData: res.data });
    return res.data;
  };

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
  };

  render() {
    const { users, userData, userForm, watches, watchForm } = this.state;
    const { props } = this;
    console.log(userData);
    return (
      <PageWrapper {...props.sharedProps}>
        <Modal>
          {modalProps => (
            <Fragment>
              <section className="admin__section">
                <h2 className="admin__title">Admin Page</h2>
                <ButtonArray
                  className="admin__btn-wrapper"
                  state={this.state}
                  toggleDisplay={this.toggleDisplay}
                />

                {watches && (
                  <WatchTable
                    {...modalProps}
                    buildHeaders={this.buildHeaders}
                    fetchWatches={this.props.fetchWatches}
                    watchData={this.props.watchData}
                  />
                )}

                {watchForm && (
                  <AddWatch
                    buildHeaders={this.buildHeaders}
                    fetchWatches={this.props.fetchWatches}
                    toggleDisplay={this.toggleDisplay}
                  />
                )}

                {users && (
                  <UserTable
                    {...modalProps}
                    buildHeaders={this.buildHeaders}
                    fetchUsers={this.fetchUsers}
                    userData={this.state.userData}
                  />
                )}

                {userForm && (
                  <AddUser
                    buildHeaders={this.buildHeaders}
                    fetchUsers={this.fetchUsers}
                    toggleDisplay={this.toggleDisplay}
                  />
                )}
              </section>
            </Fragment>
          )}
        </Modal>
      </PageWrapper>
    );
  }
}

export default Admin;
