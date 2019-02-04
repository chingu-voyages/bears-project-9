import React, { Component } from 'react';
import ReactTable from "react-table";
import { API } from "../../utils/API";
import "react-table/react-table.css";
import "./Tables.scss";

export class UserTable extends Component {
  state = {
    userData: this.props.userData
  }

  // editable react table
  renderEditable = cellInfo => {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          console.log(e.target)
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
            width: 140
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
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}