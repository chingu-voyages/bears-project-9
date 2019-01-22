import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = props => (
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
          {props.loggedIn
            ? (
              <Fragment>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="#">Cart</Link>
                </li>
                <li>
                  <button onClick={props.logout}>Sign Out</button>
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

export default NavBar;
