import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/" className="not-found-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;