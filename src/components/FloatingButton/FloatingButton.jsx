
import React from "react";
import { MessageCircle } from "lucide-react";
import "./FloatingButton.css";

function FloatingButton() {
  const phoneNumber = "971501234567"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="floating-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

export default FloatingButton;
