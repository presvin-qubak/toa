
import React, { useState } from "react";
import "./About.css";

function About() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://www.myindianproducts.com/images/travel/food/kozhikode-banana-chips-kerala.webp"
          alt="Homemade Kerala Nendran banana chips"
        />
      </div>

      <div className="about-content">

        <span className="about-tag">ABOUT TOA</span>

        <h2>
          Shopping Made
          <span> Simple & Special</span>
        </h2>

        <p>
          Welcome to TOA! We believe shopping should be
          simple, enjoyable, and convenient. Our goal is
          to bring quality products and a better shopping
          experience to everyone.
        </p>

        <p>
          From everyday essentials to special finds,
          we carefully select products that make your
          life easier and better.
        </p>

        {showDetails && (
          <div className="about-extra">
            <h3>More About TOA</h3>

            <p>
              At TOA, our mission is to make shopping
              easier by bringing carefully selected
              products together in one place.
            </p>

            <p>
              We focus on product quality, customer
              satisfaction, convenience, and a smooth
              shopping experience.
            </p>

            <h3>Why Choose TOA?</h3>

            <ul>
              <li>Carefully selected products</li>
              <li>Simple and convenient shopping</li>
              <li>Quality-focused collections</li>
              <li>Customer-first experience</li>
            </ul>
          </div>
        )}

        <button
          className="about-btn"
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          {showDetails ? "Show Less ↑" : "Discover More →"}
        </button>

      </div>
    </section>
  );
}

export default About;
