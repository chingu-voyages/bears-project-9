import React, { PureComponent, Fragment } from "react";
import "./Modal.scss";

class Modal extends PureComponent {
  state = {
    isOpen: false,
    body: "",
    buttons: "",
    style: {},
    loadingModal: false
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  setModal = modalInput => {
    this.setState({
      isOpen: true,
      body: modalInput.body,
      buttons: modalInput.buttons,
      style: modalInput.style,
      loadingModal: modalInput.loadingModal
    });
  };

  outsideClick = event => {
    if (event.target.className.includes("modal__background")) this.closeModal();
  };

  render() {
    const { loadingModal } = this.state;
    const parentClassName = loadingModal ? "modal" : "modal modal__background";

    return (
      <Fragment>
        {this.state.isOpen && (
          <div className={parentClassName} onClick={this.outsideClick}>
            <div className="modal__content" style={this.state.style}>
              {loadingModal ? null : (
                <button
                  className="modal__button_close"
                  onClick={this.closeModal}
                >
                  &times;
                </button>
              )}

              {this.state.body}
              <div className="modal__buttons">{this.state.buttons}</div>
            </div>
          </div>
        )}
        {this.props.children({
          closeModal: this.closeModal,
          setModal: this.setModal
        })}
      </Fragment>
    );
  }
}

export default Modal;
