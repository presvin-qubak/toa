
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ShoppingBag,
  ArrowLeft,
  Trash2,
  Plus,
  Minus
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    cartTotal,
    updateQuantity
  } = useCart();

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-page">
        <div className="cart-empty-content">

          <div className="cart-empty-icon">
            <ShoppingBag size={60} strokeWidth={1.4} />
          </div>

          <h1>Your Cart is Empty</h1>

          <p>
            You haven't added any products to your
            cart yet. Explore our collection and
            find something you love!
          </p>

          <button
            type="button"
            className="continue-shopping-btn"
            onClick={() => navigate("/category")}
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </button>

        </div>
      </div>
    );
  }

  // Cart With Products
  return (
    <div className="cart-page">

      <div className="cart-heading">
        <h1>Shopping Cart</h1>
        <p>
          {cartItems.length} different products in your cart
        </p>
      </div>

      <div className="cart-layout">

        {/* Cart Products */}
        <div className="cart-items">

          {cartItems.map((item) => {

            const itemTotal =
              Number(item.price) * item.quantity;

            return (
              <div className="cart-item" key={item.id}>

                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="cart-item-details">

                  <h2>{item.title}</h2>

                  <p>
                    RS {Number(item.price).toFixed(2)} / kg
                  </p>

                  <div className="cart-quantity">

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, -1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={15} />
                    </button>

                    <strong>{item.quantity} kg</strong>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <Plus size={15} />
                    </button>

                  </div>

                  <h3>
                    RS {itemTotal.toFixed(2)}
                  </h3>

                </div>

                <button
                  type="button"
                  className="remove-cart-item"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.title}`}
                >
                  <Trash2 size={20} />
                </button>

              </div>
            );
          })}

        </div>

        {/* Order Summary */}
        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="cart-summary-row">
            <span>Subtotal</span>
            <strong>RS {cartTotal.toFixed(2)}</strong>
          </div>

          <div className="cart-summary-row">
            <span>Delivery</span>
            <strong>Calculated at checkout</strong>
          </div>

          <div className="cart-summary-row cart-grand-total">
            <span>Total</span>
            <strong>RS {cartTotal.toFixed(2)}</strong>
          </div>

          <button
            type="button"
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>

          <button
            type="button"
            className="continue-shopping-link"
            onClick={() => navigate("/category")}
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;
