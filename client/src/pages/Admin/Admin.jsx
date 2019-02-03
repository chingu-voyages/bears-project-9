import React, { Component, Fragment } from 'react';
import Modal from "../../components/Modal/Modal";
import { WatchTable } from "../../components/Tables"
import { API } from "../../utils";

class Admin extends Component {

  render() {
    return (
      <Modal>
        {({ closeModal, setModal }) => (
          <Fragment>
            <h2>Admin Page</h2>
            <WatchTable
              fetchWatches={this.props.fetchWatches}
              watchData={this.props.watchData}
            />
          </Fragment>
        )}

      </Modal>
    );
  }
}

export default Admin;