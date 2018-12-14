import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import "./NavBar.scss";

const NavBar = props => (
  <header className="header">
    <div className="header__inner">
      <h1 className="header__logo">HOROLOGY</h1>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="#">About</Link>
          </li>
          {props.loggedIn
            ? (
              <Fragment>
                <li>
                  <Link to="#">Wishlist</Link>
                </li>
                <li>
                  <Link to="#">Cart</Link>
                </li>
                <li>
                  <Link to="#">Sign Out</Link>
                </li>
              </Fragment>
            ) : (
              <li>
                <Link to="#">Sign In</Link>
              </li>
            )
          }
        </ul>
      </nav>
    </div>

  </header >
);

export default NavBar;