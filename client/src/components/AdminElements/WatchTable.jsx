import React, { Component, Fragment } from 'react';
import ReactTable from "react-table";
import { API } from "../../utils/API";
import "react-table/react-table.css";
import "./Tables.scss";

export class WatchTable extends Component {
  state = {
    watchData: this.props.watchData
  }

  updateRow = async row => {
    console.log(row);
    const { brand, description, gender, name, price, id, } = row.original;

    if (!id)
      await API.createWatch(row.original);
    else {
      const updateObject = {};
      updateObject.brand = brand;
      updateObject.description = description;
      updateObject.gender = gender;
      updateObject.name = name;
      updateObject.price = price;
      await API.updateWatch(id, updateObject)
    }

    const watchData = await this.props.fetchWatches();
    this.setState({ watchData });
  }

  deleteWatch = async id => {
    await API.deleteWatch(id);
    const watchData = await this.props.fetchWatches();
    this.setState({ watchData });
  }

  // editable react table
  renderEditable = cellInfo => {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          console.log(e.target)
          const watchData = [...this.state.watchData];
          watchData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ watchData });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.watchData[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    return (
      <ReactTable
        data={this.state.watchData}
        filterable
        columns={[
          {
            Header: "Actions",
            id: "admin",
            width: 140,
            Cell: row => (
              <div className="table-action-icons">
                <button onClick={() => this.updateRow(row)} title="save changes">
                  <i className="fas fa-save" />
                </button>
                <button
                  onClick={() => this.uploadImageModal(row)}
                  title="upload new image"
                >
                  <i className="fas fa-upload" />
                </button>
                <button onClick={() => this.imageModal(row)} title="see image">
                  <i className="fas fa-images" />
                </button>
                <button onClick={() => this.deleteWatch(row.original.id)} title="delete watch">
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            )
          },
          {
            Header: 'MFG',
            accessor: "brand",
            Cell: this.renderEditable
          },
          {
            Header: "Model",
            accessor: "name",
            Cell: this.renderEditable
          },
          {
            Header: "Price",
            accessor: "price",
            id: "price",
            width: 80,
            Cell: this.renderEditable
          },
          {
            Header: "Gender",
            accessor: "gender",
            width: 100,
            Cell: this.renderEditable
          },
          {
            Header: "Description",
            accessor: "description",
            Cell: this.renderEditable
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}