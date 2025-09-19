// components/WhatsAppButton.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
interface WhatsAppButtonProps {
  phone: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone,
  message = "Hello",
}) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
