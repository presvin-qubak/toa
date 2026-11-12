
import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  // Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shoppingCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Save cart whenever products change
  useEffect(() => {
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product, quantity) => {
    setCartItems((prev) => {

      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity
        }
      ];
    });
  };

  // Remove product
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Update product quantity
  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                item.quantity + change
              )
            }
          : item
      )
    );
  };

  // Calculate total cart quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
