
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { categories } from "../../data/categories";
import "./CategoryDetails.css";

function CategoryDetails() {

  const { id } = useParams();

  const category = categories.find(
    (item) => item.id === Number(id)
  );

  if (!category) {
    return <Navigate to="/category" replace />;
  }

  return (
    <section className="details-section">

      <div className="details-image">
        <img
          src={category.image}
          alt={category.title}
        />
      </div>

      <div className="details-content">

        <span>OUR COLLECTION</span>

        <h1>{category.title}</h1>

        <p>{category.details}</p>

        <h2>Available Products</h2>

        <ul>
          {category.products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>

        <Link to="/category" className="back-btn">
          ← Back to Categories
        </Link>

      </div>

    </section>
  );
}

export default CategoryDetails;
