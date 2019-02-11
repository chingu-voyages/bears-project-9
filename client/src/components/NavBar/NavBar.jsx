import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import Badge from "../Badge/Badge";
import MediaQuery from "react-responsive";
import "./NavBar.scss";
import HamburgerMenuBody from "../HamburgerMenuBody/HamburgerMenuBody";

class NavBar extends PureComponent {
  state = {
    menuOpen: false
  };

  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  };

  handleClickSignout = () => {
    this.props.resetProductFilter();
    this.props.logout();
  };

  render() {
    const {
      cartCount,
      isAdmin,
      wishlistCount,
      loggedIn,
      toggleCart,
      resetProductFilter
    } = this.props;

    return (
      <Fragment>
        <header className="header">
          <div className="header__inner">
            {this.state.menuOpen ? (
              <MediaQuery query="(max-width:615px)">
                <div
                  className="hamburger-container"
                  onClick={this.handleLinkClick}
                >
                  <i class="fas fa-angle-up" />
                </div>
              </MediaQuery>
            ) : (
              <MediaQuery query="(max-width:615px)">
                <div
                  className="hamburger-container"
                  onClick={this.handleMenuClick}
                >
                  <i className="fas fa-bars" />
                </div>
              </MediaQuery>
            )}
            <h1 className="header__logo">
              <Link to="/" onClick={resetProductFilter} className="navbar_logo">
                HOROLOGY
              </Link>
            </h1>
            <nav className="header__nav">
              <ul>
                {isAdmin && (
                  <li>
                    <Link to="/admin" onClick={resetProductFilter}>
                      <span className="link_label">Admin</span>
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/about">
                    <span className="link_label">About</span>
                  </Link>
                </li>
                {loggedIn ? (
                  <Fragment>
                    <li>
                      <Badge badgeLabel={wishlistCount}>
                        <Link to="/wishlist" onClick={resetProductFilter}>
                          <span className="link_label">Wishlist</span>
                        </Link>
                      </Badge>
                    </li>
                    <li>
                      <Badge badgeLabel={cartCount}>
                        <button onClick={toggleCart}>
                          <span className="link_label">Cart</span>
                        </button>
                      </Badge>
                    </li>
                    <li>
                      <button onClick={this.handleClickSignout}>
                        <span className="link_label">Sign Out</span>
                      </button>
                    </li>
                  </Fragment>
                ) : (
                  <li>
                    <Link to="/signin" onClick={resetProductFilter}>
                      <span className="link_label">Sign In</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </header>
        <HamburgerMenuBody
          open={this.state.menuOpen}
          isAdmin={isAdmin}
          loggedIn={loggedIn}
          resetProductFilter={resetProductFilter}
          toggleCart={toggleCart}
          handleClickSignout={this.handleClickSignout}
        />
      </Fragment>
    );
  }
}

export default NavBar;
