
import React, { useEffect } from "react";
import { CartProvider } from "./context/CartContext";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Category from "./pages/Category/Category";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import NotFound from "./pages/NotFound/NotFound";
import CategoryDetails from "./components/CategoryDetails/CategoryDetails";

import FloatingButton from "./components/FloatingButton/FloatingButton";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

import Cart from "./pages/Cart/Cart";

import "./pages/PageTransition/PageTransition.css";

// Scroll to top when changing pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

// Page Routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page-container" key={location.pathname}>
      <Routes location={location}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Category */}
        <Route path="/category" element={<Category />} />

        {/* Category Details */}
        <Route
          path="/category/:id"
          element={<CategoryDetails />}
        />

        {/* Shopping Cart */}
        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* 404 Page - Keep Last */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <ScrollToTop />

        <Navbar />

        <AnimatedRoutes />

        <Footer />

        <FloatingButton />

        <ScrollToTopButton />

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
