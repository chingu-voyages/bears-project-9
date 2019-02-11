import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import "./About.scss";

const About = props => (
  <PageWrapper {...props.sharedProps}>
    <div className="about">
      <section className="about-section">
        <div className="about-card">
          HOROLOGY is Bears Team 09’s (GitHub handles: @Strangebrewer, @spicybyte, @tara-fenton, @Chris Von Wilczur) exploration in building a fully functional
          e-commerce web app. HOROLOGY specializes in the sale of luxury watches
          from the HOROLOGY brand, including the ability to process payments via
          third-party integrations with Stripe. Core features will include the
          ability to browse a selection of watches and add watches to one’s cart
          or wishlist for eventual purchase. This system will also include a
          user account registration system in order to save purchases and
          wishlist items.
        </div>
      </section>
    </div>
  </PageWrapper>
);

export default About;
