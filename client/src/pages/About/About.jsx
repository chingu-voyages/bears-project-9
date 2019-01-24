import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./About.sass";

const About = props => (
  <div className="about">
    <NavBar
      loggedIn={props.loggedIn}
      logout={props.logout}
    />
    
    <section className="about-section">
      <div className="about-card">
        HOROLOGY is Bears Team 09’s exploration in building a fully functional
        e-commerce web app. HOROLOGY specializes in the sale of luxury watches
        from the HOROLOGY brand, including the ability to process payments via
        third-party integrations with Stripe. Core features will include the
        ability to browse a selection of watches and add watches to one’s cart
        or wishlist for eventual purchase. This system will also include a user
        account registration system in order to save purchases and wishlist
        items.
      </div>
    </section>
  </div>
);

export default About;
