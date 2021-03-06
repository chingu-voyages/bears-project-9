import React, { PureComponent, Fragment } from "react";
import ReactTable from "react-table";
import Spinner from "../Spinner/Spinner";
import { API } from "../../utils/API";
import "react-table/react-table.css";
import "./Tables.scss";

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${
  process.env.REACT_APP_CLOUD_NAME
}/image/upload/`;

export class WatchTable extends PureComponent {
  state = {
    data: "",
    imageUrl: "",
    loading: false,
    watchData: this.props.watchData
  };

  // buildHeaders = () => {
  //   const token = localStorage.getItem('token');
  //   return { headers: { "Authorization": `Bearer ${token}` } }
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  updateRow = async row => {
    this.setState({ loading: true });
    const { brand, description, gender, name, price, id } = row.original;
    const updateObject = {};
    updateObject.brand = brand;
    updateObject.description = description;
    updateObject.gender = gender;
    updateObject.name = name;
    updateObject.price = price;
    const headers = this.props.buildHeaders();
    await API.adminUpdateWatch(id, updateObject, headers);
    const watchData = await this.props.fetchWatches();
    setTimeout(() => this.setState({ watchData, loading: false }), 500);
  };

  deleteWatchModal = id => {
    this.props.setModal({
      body: <h2>Are you sure you want to delete this watch?</h2>,
      buttons: (
        <Fragment>
          <button onClick={() => this.deleteWatch(id)}>Yes, delete it</button>
          <button onClick={this.props.closeModal}>Cancel</button>
        </Fragment>
      )
    });
  };

  deleteWatch = async id => {
    this.setState({ loading: true });
    const headers = this.props.buildHeaders();
    await API.adminDeleteWatch(id, headers);
    const watchData = await this.props.fetchWatches();
    setTimeout(async () => {
      await this.setState({ watchData, loading: false });
      this.props.closeModal();
    }, 500);
  };

  imageModal = row => {
    const { brand, name, id, image, publicId } = row.original;
    console.log(publicId);
    this.props.setModal({
      body: <img src={image} alt={`${brand} - ${name}`} />,
      buttons: (
        <Fragment>
          <button
            onClick={() => this.adminRemoveImage(id, { publicId: publicId })}
          >
            Delete
          </button>
          <button onClick={this.props.closeModal}>Close</button>
        </Fragment>
      )
    });
  };

  handleSelectImage = async event => {
    const files = event.target.files;
    if (!files[0].type.includes("image")) return;
    const data = new FormData();
    await data.append("file", files[0]);
    await data.append("upload_preset", "horology");
    this.setState({ data });
  };

  saveImageToCloud = async () => {
    const res = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: this.state.data
    });
    const file = await res.json();
    console.log(file);
    return file;
  };

  addImageToWatch = async id => {
    this.props.setModal({
      body: (
        <Spinner
          style={{
            height: "15px",
            width: "15px",
            display: "inline-block"
          }}
        />
      ),
      loadingModal: true
    });

    if (this.state.data) {
      this.setState({ loading: true });
      const watchImageData = {};
      const file = await this.saveImageToCloud();
      console.log(file);
      watchImageData.image = file.secure_url;
      watchImageData.image400 = file.eager[0].secure_url;
      watchImageData.image30 = file.eager[1].secure_url;
      watchImageData.publicId = file.public_id;
      const headers = this.props.buildHeaders();
      await API.adminUpdateWatch(id, watchImageData, headers);
      const watchData = await this.props.fetchWatches();
      this.setState({ watchData, loading: false });
      this.props.closeModal();
    }
  };

  adminRemoveImage = async (id, imageData) => {
    this.setState({ loading: true });
    const headers = this.props.buildHeaders();
    await API.adminRemoveImage(id, imageData, headers);
    const watchData = await this.props.fetchWatches();
    this.setState({ watchData, loading: false });
    this.props.closeModal();
  };

  uploadImageModal = row => {
    this.props.setModal({
      body: (
        <Fragment>
          <label>Image upload:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={this.handleSelectImage}
            placeholder="upload an image"
          />
        </Fragment>
      ),
      buttons: (
        <Fragment>
          <button onClick={() => this.addImageToWatch(row.original.id)}>
            Upload
          </button>
          <button onClick={this.props.closeModal}>Cancel</button>
        </Fragment>
      ),
      loadingModal: true
    });
  };

  // editable react table
  renderEditable = cellInfo => {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
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
                {this.state.loading ? (
                  <Spinner
                    style={{
                      height: "15px",
                      width: "15px",
                      display: "inline-block"
                    }}
                  />
                ) : (
                  <Fragment>
                    <button
                      onClick={() => this.updateRow(row)}
                      title="save changes"
                    >
                      <i className="fas fa-save" />
                    </button>
                    <button
                      disabled={row.original.image}
                      onClick={() => this.uploadImageModal(row)}
                      title={
                        row.original.image
                          ? "you must delete the existing image before you can upload another"
                          : "upload new image"
                      }
                    >
                      <i className="fas fa-upload" />
                    </button>
                    <button
                      disabled={!row.original.image}
                      onClick={() => this.imageModal(row)}
                      title={
                        !row.original.image
                          ? "there is no image uploaded for this watch"
                          : "see image"
                      }
                    >
                      <i className="fas fa-images" />
                    </button>
                    <button
                      onClick={() => this.deleteWatchModal(row.original.id)}
                      title="delete watch"
                    >
                      <i className="fas fa-trash-alt" />
                    </button>
                  </Fragment>
                )}
              </div>
            )
          },
          {
            Header: "MFG",
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
        defaultSorted={[
          {
            id: "name",
            desc: false
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}
