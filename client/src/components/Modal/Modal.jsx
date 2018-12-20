import React, { Component, Fragment } from 'react';
import "./Modal.scss";

class Modal extends Component {
  state = {
    isOpen: false,
    body: "",
    buttons: "",
    style: {}
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  setModal = modalInput => {
    this.setState({
      isOpen: true,
      body: modalInput.body,
      buttons: modalInput.buttons,
      style: modalInput.style
    });
  };

  outsideClick = event => {
    if (event.target.className.includes("modal__background"))
      this.closeModal();
  };

  render() {
    return (
      <Fragment>
        {this.state.isOpen &&
          <div className="modal modal__background" onClick={this.outsideClick}>
            <div className="modal__content" style={this.state.style}>
              <button className="modal__button_close" onClick={this.closeModal}>&times;</button>
              {this.state.body}
              <div className="modal__buttons">
                {this.state.buttons}
              </div>
            </div>
          </div>
        }
        {this.props.children({
          closeModal: this.closeModal,
          setModal: this.setModal
        })}
      </Fragment>
    );
  }
}

export default Modal;