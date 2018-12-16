import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Modal from "../components/Modal/Modal";
import ModalDemo from "../components/Modal/ModalDemo";


const Landing = props => {

  return (
    <div>
      <NavBar />

      <Modal>
        {modalProps => (
          <ModalDemo {...modalProps} />
        )}
      </Modal>
      
    </div>
  );

}

export default Landing;