
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import heroImage from "../../assets/hero-Image.jpeg";

function Hero() {
  return (
    <section className="hero">

      {/* Hero Content */}
      <div className="hero-content">

        <span className="hero-tag">
          WELCOME TO TOA
        </span>

        <h1>
          Taste The Goodness
          <br />
          Of <span>Tradition</span>
        </h1>

        <p>
          Discover delicious homemade snacks and quality
          food products made with care and love.
        </p>

        <Link to="/category" className="hero-btn">
          Shop Now →
        </Link>

      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Traditional delicious snacks"
        />
      </div>

    </section>
  );
}

export default Hero;
