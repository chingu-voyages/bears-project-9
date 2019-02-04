import React, { Component } from 'react';
import Spinner from "../Spinner/Spinner";
import { API } from "../../utils";
import "./Forms.scss";

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`

export class AddWatch extends Component {
  state = {
    brand: "",
    data: "",
    description: "",
    gender: "",
    loading: false,
    name: "",
    price: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSelectImage = async event => {
    const files = event.target.files;
    if (!files[0].type.includes('image')) return;
    const data = new FormData();
    await data.append("file", files[0]);
    await data.append("upload_preset", "horology");
    this.setState({ data });
  }

  saveImageToCloud = async () => {
    const res = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: this.state.data
    });
    const file = await res.json();
    return file;
  }

  createWatch = async event => {
    event.preventDefault();
    await this.setState({ loading: true });
    const watchData = { ...this.state };
    delete watchData.loading;
    if (this.state.data) {
      const file = await this.saveImageToCloud();
      console.log(file);
      watchData.image = file.secure_url;
      watchData.image400 = file.eager[0].secure_url;
      watchData.image30 = file.eager[1].secure_url;
      watchData.publicId = file.public_id;
    }
    await API.adminCreateWatch(watchData);
    const newState = {
      brand: "",
      data: "",
      description: "",
      gender: "",
      loading: false,
      name: "",
      price: ""
    }
    await this.props.fetchWatches();
    setTimeout(() => this.setState(newState), 500);
  }

  render() {
    const { brand, description, gender, name, price } = this.state;
    const spinner = <Spinner style={{ height: "15px", width: "15px", display: "inline-block" }} />
    return (
      <form className="form watch-form">
        <label>Brand:</label>
        <input
          name="brand"
          value={brand}
          type="text"
          onChange={this.handleInputChange}
        />
        <label>Model:</label>
        <input
          name="name"
          value={name}
          type="text"
          onChange={this.handleInputChange}
        />
        <label>Price:</label>
        <input
          name="price"
          value={price}
          type="text"
          onChange={this.handleInputChange}
        />
        <label>Gender:</label>
        <input
          name="gender"
          value={gender}
          type="text"
          onChange={this.handleInputChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={this.handleInputChange}
          row="2">
        </textarea>
        <label>Image:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={this.handleSelectImage}
          placeholder="upload an image"
        />
        <button
          className="watch-form_submit"
          disabled={this.state.loading || (!brand || !name || !price || !gender)}
          // disabled={!username || !password}
          onClick={this.createWatch}
        >
          {this.state.loading ? spinner : "Submit"}
        </button>
      </form>
    );
  }
}