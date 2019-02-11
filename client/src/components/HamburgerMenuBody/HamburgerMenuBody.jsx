import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import "./HamburgerMenuBody.scss";

class HamburgerMenuBody extends React.Component {
  state = {
    open: this.props.open ? this.props.open : false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const {
      isAdmin,
      loggedIn,
      resetProductFilter,
      toggleCart,
      handleClickSignout
    } = this.props;

    return (
      <MediaQuery query="(max-width:615px)">
        <div className="menu_container">
          {this.state.open ? (
            <div className="menu_list">
              {isAdmin && (
                <div className="item_menuItem">
                  <Link to="/admin" onClick={resetProductFilter}>
                    <span className="item_menuItem_label">Admin</span>
                  </Link>
                </div>
              )}
              <div className="item_menuItem">
                <Link to="/about">
                  <span className="item_menuItem_label">About</span>
                </Link>
              </div>

              {loggedIn ? (
                <Fragment>
                  <div className="item_menuItem">
                    <Link to="/wishlist" onClick={resetProductFilter}>
                      <span className="item_menuItem_label">Wishlist</span>
                    </Link>
                  </div>
                  <div className="item_menuItem">
                    <button onClick={toggleCart}>
                      <span className="item_menuItem_label">Cart</span>
                    </button>
                  </div>
                  <div className="item_menuItem">
                    <button onClick={handleClickSignout}>
                      <span className="item_menuItem_label">Sign Out</span>
                    </button>
                  </div>
                </Fragment>
              ) : (
                <div className="item_menuItem">
                  <Link to="/signin" onClick={resetProductFilter}>
                    <span className="item_menuItem_label">Sign In</span>
                  </Link>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </MediaQuery>
    );
  }
}

export default HamburgerMenuBody;
