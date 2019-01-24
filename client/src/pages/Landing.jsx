import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Modal from "../components/Modal/Modal";
import ModalDemo from "../components/Modal/ModalDemo";
import ProductGrid from "../components/ProductGrid/ProductGrid";


const Landing = props => {

  return (
    <div>
      <NavBar
        loggedIn={props.loggedIn}
        logout={props.logout}
      />
      
      <ProductGrid
        watchData={props.watchData}
      />

    </div>
  );

}

export default Landing;
