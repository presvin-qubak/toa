
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingBag,
  MapPin,
  User
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    removeFromCart
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "COD"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      navigate("/category");
      return;
    }

    // Prevent duplicate clicks
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Generate a temporary order ID
    const orderId =
      "TOA" + Date.now().toString().slice(-8);

    // Prepare order information
    const orderData = {
      orderId,
      customer: { ...formData },
      items: cartItems.map((item) => ({ ...item })),
      total: cartTotal,
      paymentMethod: formData.paymentMethod,
      orderDate: new Date().toISOString(),
      status: "Confirmed"
    };

    // Save order locally for this demo
    localStorage.setItem(
      "lastOrder",
      JSON.stringify(orderData)
    );

    // Clear cart
    cartItems.forEach((item) => {
      removeFromCart(item.id);
    });

    // Navigate to success page
    navigate("/order-success", {
      state: {
        order: orderData
      },
      replace: true
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <ShoppingBag size={60} />
        <h2>Your Cart is Empty</h2>
        <p>Please add products before checkout.</p>

        <button onClick={() => navigate("/category")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <section className="checkout-page">

      <div className="checkout-heading">
        <button
          type="button"
          className="back-to-cart"
          onClick={() => navigate("/cart")}
        >
          <ArrowLeft size={18} />
          Back to Cart
        </button>

        <h1>Checkout</h1>
        <p>Complete your details to continue your order.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="checkout-layout">

          {/* Customer Form */}
          <div className="checkout-form">

            {/* Personal Information */}
            <div className="checkout-card">
              <h2>
                <User size={21} />
                Personal Information
              </h2>

              <div className="checkout-field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkout-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkout-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div className="checkout-card">
              <h2>
                <MapPin size={21} />
                Delivery Address
              </h2>

              <div className="checkout-field">
                <label>Full Address</label>
                <textarea
                  name="address"
                  placeholder="House number, street, area..."
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>

              <div className="checkout-row">
                <div className="checkout-field">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="checkout-field">
                <label>PIN Code</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter PIN code"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="checkout-card">
              <h2>
                <ShoppingBag size={21} />
                Payment Method
              </h2>

              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={formData.paymentMethod === "COD"}
                  onChange={handleChange}
                />

                <span>
                  <strong>Cash on Delivery</strong>
                  <small>Pay when your order arrives.</small>
                </span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="ONLINE"
                  checked={formData.paymentMethod === "ONLINE"}
                  onChange={handleChange}
                />

                <span>
                  <strong>Online Payment</strong>
                  <small>Online payment integration required.</small>
                </span>
              </label>
            </div>

          </div>

          {/* Order Summary */}
          <div className="checkout-summary">
            <h2>Your Order</h2>

            <div className="checkout-products">
              {cartItems.map((item) => (
                <div
                  className="checkout-product"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="checkout-product-info">
                    <h3>{item.title}</h3>
                    <p>{item.quantity} kg</p>
                  </div>

                  <strong>
                    RS{" "}
                    {(
                      Number(item.price) * item.quantity
                    ).toFixed(2)}
                  </strong>
                </div>
              ))}
            </div>

            <div className="checkout-total-row">
              <span>Subtotal</span>
              <strong>RS {cartTotal.toFixed(2)}</strong>
            </div>

            <div className="checkout-total-row">
              <span>Delivery</span>
              <strong>Calculated later</strong>
            </div>

            <div className="checkout-grand-total">
              <span>Total</span>
              <strong>RS {cartTotal.toFixed(2)}</strong>
            </div>

            <button
              type="submit"
              className="place-order-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>

            <p className="checkout-note">
              Your order details will be submitted for processing.
            </p>
          </div>

        </div>
      </form>
    </section>
  );
}

export default Checkout;
