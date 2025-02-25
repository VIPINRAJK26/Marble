import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from React Icons

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/919447426004?text=hello" // Replace with your WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp size={28} /> {/* WhatsApp icon */}
    </a>
  );
};

export default WhatsAppIcon;
