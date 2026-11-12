
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle, ShoppingBag, Package } from "lucide-react";
import "./OrderSuccess.css";

function OrderSuccess() {
  const location = useLocation();

  // Order details passed from Checkout page
  const order = location.state?.order;

  const orderId =
    order?.orderId || "TOA" + Date.now().toString().slice(-8);

  return (
    <section className="success-page">
      <div className="success-card">

        <div className="success-icon">
          <CheckCircle size={65} />
        </div>

        <h1>Order Successful!</h1>

        <p className="success-message">
          Thank you for shopping with us.
          Your order has been received successfully.
        </p>

        <div className="order-details">
          <div>
            <span>Order ID</span>
            <strong>{orderId}</strong>
          </div>

          {order?.total !== undefined && (
            <div>
              <span>Order Total</span>
              <strong>RS {Number(order.total).toFixed(2)}</strong>
            </div>
          )}

          <div>
            <span>Payment Method</span>
            <strong>{order?.paymentMethod || "Cash on Delivery"}</strong>
          </div>

          <div>
            <span>Order Status</span>
            <strong className="order-status">Confirmed</strong>
          </div>
        </div>

        <p className="delivery-message">
          <Package size={20} />
          We will prepare your order soon!
        </p>

        <div className="success-buttons">
          <Link to="/category" className="continue-shopping">
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>

          <Link to="/" className="home-btn">
            Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}

export default OrderSuccess;
