
import React, { useState } from "react";

import {
  Search,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";

import { useCart } from "../../context/CartContext";

import {
  useNavigate,
  Link,
  NavLink
} from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Cart Context
  const { cartCount } = useCart();

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          TOA<span>.</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/category" onClick={closeMenu}>
            Category
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>

      </ul>

      {/* Navigation Actions */}
      <div className="nav-actions">

        {/* Search */}
        <div className={`search-container ${searchOpen ? "active" : ""}`}>

          <input
            type="search"
            placeholder="Search products..."
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            type="button"
            className="icon-btn search-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label={searchOpen ? "Close search" : "Open search"}
          >
            {searchOpen ? <X /> : <Search />}
          </button>

        </div>

        {/* Shopping Cart */}
        <button
          type="button"
          className="icon-btn cart-btn"
          aria-label={`Shopping cart, ${cartCount} items`}
          onClick={() => navigate("/cart")}
        >
          <ShoppingBag />

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}

        </button>

        {/* Mobile Menu */}
        <button
          type="button"
          className={`icon-btn menu-btn ${menuOpen ? "menu-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
