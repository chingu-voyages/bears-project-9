import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import Badge from "../Badge/Badge";
import "./NavBar.scss";

class NavBar extends PureComponent {
  render() {
    const {
      cartCount,
      isAdmin,
      wishlistCount,
      loggedIn,
      toggleCart,
      logout,
      resetProductFilter
    } = this.props;

    const handleClickSignout = () => {
      resetProductFilter();
      logout();
    };

    return (
      <header className="header">
        <div className="header__inner">
          <h1 className="header__logo">
            <Link to="/" onClick={resetProductFilter}>
              HOROLOGY
          </Link>
          </h1>
          <nav className="header__nav">
            <ul>
              {isAdmin &&
                <li>
                  <Link to="/admin" onClick={resetProductFilter}>
                    Admin
                </Link>
                </li>}
              <li>
                <Link to="/about">About</Link>
              </li>
              {loggedIn ? (
                <Fragment>
                  <li>
                    <Badge badgeLabel={wishlistCount}>
                      <Link to="/wishlist" onClick={resetProductFilter}>
                        Wishlist
                    </Link>
                    </Badge>
                  </li>
                  <li>
                    <Badge badgeLabel={cartCount}>
                      <button onClick={toggleCart}>Cart</button>
                    </Badge>
                  </li>
                  <li>
                    <button onClick={handleClickSignout}>Sign Out</button>
                  </li>
                </Fragment>
              ) : (
                  <li>
                    <Link to="/signin" onClick={resetProductFilter}>
                      Sign In
                </Link>
                  </li>
                )}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};

export default NavBar;
