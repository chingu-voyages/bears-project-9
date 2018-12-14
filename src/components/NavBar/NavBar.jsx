import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import "./NavBar.scss";

const NavBar = props => {
  const fuckYou = shit => {
    console.log(shit);
  }
  return (
    <div className="header">
      <div className="header__inner">
        <h1 className="header__logo">HOROLOGY</h1>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="#">About</Link>
              {props.loggedIn
                ? (
                  <Fragment>
                    <Link to="#">Wishlist</Link>
                    <Link to="#">Cart</Link>
                    <button>Sign Out</button>
                  </Fragment>
                ) : <button onClick={() => fuckYou("Hi")}>Sign In</button>
              }
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
}

export default NavBar;