
import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import { categories } from "../../data/categories";
import { useCart } from "../../context/CartContext";

function Category() {
  const { cartItems, addToCart, updateQuantity } = useCart();

  const getCartItem = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  const handleIncrease = (category) => {
    const existingItem = getCartItem(category.id);

    if (existingItem) {
      updateQuantity(category.id, 1);
    } else {
      addToCart(category, 1);
    }
  };

  const handleDecrease = (category) => {
    const existingItem = getCartItem(category.id);

    if (existingItem && existingItem.quantity > 1) {
      updateQuantity(category.id, -1);
    }
  };

  const handleAddToCart = (category) => {
    const existingItem = getCartItem(category.id);

    if (!existingItem) {
      addToCart(category, 1);
    }
  };

  return (
    <section className="category-section">
      <div className="category-heading">
        <span>EXPLORE OUR COLLECTION</span>
        <h1>Shop By Category</h1>
        <p>
          Discover delicious products and explore our
          carefully selected collections.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => {
          const cartItem = getCartItem(category.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          const price = Number(category.price) || 0;
          const totalPrice = price * quantity;

          return (
            <div className="category-card" key={category.id}>
              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.title}
                />
              </div>

              <div className="category-content">
                <h2>{category.title}</h2>

                <p>{category.description}</p>

                <div className="product-price">
                  <span>Price per kg:</span>
                  <strong>RS {price.toFixed(2)}</strong>
                </div>

                <div className="quantity-container">
                  <span>Quantity:</span>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => handleDecrease(category)}
                      disabled={quantity === 0 || quantity === 1}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <strong>{quantity} kg</strong>

                    <button
                      type="button"
                      onClick={() => handleIncrease(category)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="total-price">
                  <span>Total Price:</span>
                  <strong>RS {totalPrice.toFixed(2)}</strong>
                </div>

                <button
                  type="button"
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(category)}
                >
                  {quantity > 0 ? "Added to Cart" : "Add to Cart"}
                </button>

                <Link
                  to={`/category/${category.id}`}
                  className="category-btn"
                >
                  Explore More →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Category;
