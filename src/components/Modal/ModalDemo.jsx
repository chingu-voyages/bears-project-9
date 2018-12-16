import React from "react";

const ModalDemo = props => {

  const testModal = () => {
    props.setModal({
      body: <h2>Hello!</h2>,
      buttons: <button onClick={props.closeModal}>Close</button>,
      style: {
        width: '500px',
        color: '#850000'
      }
    })
  }

  return (
    <div
      className="modal__demo"
      style={{ width: '100px', margin: 'auto' }}
    >
      <button onClick={testModal}>Test Modal</button>
    </div>
  )
};

export default ModalDemo;