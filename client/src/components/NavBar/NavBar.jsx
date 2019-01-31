import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Badge from "../Badge/Badge";
import "./NavBar.scss";

const NavBar = props => {
  const { cartCount, wishlistCount, loggedIn, toggleCart, logout } = props;

  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">
          <Link to="/">HOROLOGY</Link>
        </h1>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            {loggedIn ? (
              <Fragment>
                <li>
                  <Badge badgeLabel={wishlistCount}>
                    <Link to="/wishlist">Wishlist</Link>
                  </Badge>
                </li>
                <li>
                  <Badge badgeLabel={cartCount}>
                    <button onClick={toggleCart}>Cart</button>
                  </Badge>
                </li>
                <li>
                  <button onClick={logout}>Sign Out</button>
                </li>
              </Fragment>
            ) : (
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
