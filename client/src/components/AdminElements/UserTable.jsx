import React, { PureComponent, Fragment } from 'react';
import ReactTable from "react-table";
import Spinner from "../Spinner/Spinner";
import { API } from "../../utils/API";
import "react-table/react-table.css";
import "./Tables.scss";

export class UserTable extends PureComponent {
  state = {
    loading: false,
    userData: this.props.userData || []
  }

  updateRow = async row => {
    this.setState({ loading: true });
    const { admin, id, username } = row.original;
    const updateObject = { admin, username };
    const headers = this.props.buildHeaders();
    await API.adminUpdateUser(id, updateObject, headers);
    const userData = await this.props.fetchUsers();
    setTimeout(() => this.setState({ userData, loading: false }), 500);
  }

  deleteUserModal = id => {
    this.props.setModal({
      body: (
        <h2>Are you sure you want to delete this user?</h2>
      ),
      buttons: (
        <Fragment>
          <button onClick={() => this.deleteUser(id)}>Yes, delete them</button>
          <button onClick={this.props.closeModal}>Cancel</button>
        </Fragment>
      )
    })
  }

  deleteUser = async id => {
    this.setState({ loading: true });
    const headers = this.props.buildHeaders();
    await API.adminDeleteUser(id, headers);
    const userData = await this.props.fetchUsers();
    this.props.closeModal()
    setTimeout(() => this.setState({ userData, loading: false }), 500);
  }

  // editable react table
  renderEditable = cellInfo => {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const userData = [...this.state.userData];
          userData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ userData });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.userData[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    return (
      <ReactTable
        data={this.state.userData}
        filterable
        columns={[
          {
            Header: "Actions",
            width: 80,
            Cell: row => (
              <div className="table-action-icons">
                {this.state.loading
                  ? (
                    <Spinner
                      style={{
                        height: "15px",
                        width: "15px",
                        display: "inline-block"
                      }}
                    />
                  ) : (
                    <Fragment>
                      <button onClick={() => this.updateRow(row)} title="save changes">
                        <i className="fas fa-save" />
                      </button>
                      <button onClick={() => this.deleteUserModal(row.original.id)} title="delete user">
                        <i className="fas fa-trash-alt" />
                      </button>
                    </Fragment>
                  )
                }
              </div>
            )
          },
          {
            Header: "Username",
            accessor: "username",
            Cell: this.renderEditable
          },
          {
            Header: "Admin?",
            accessor: "admin",
            Cell: this.renderEditable
          }
        ]}
        defaultSorted={[
          {
            id: "username",
            desc: false
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}