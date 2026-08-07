import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "Contact",
        event_label: "Floating WhatsApp Button",
      });
    }
  };

  return (
    <a
      href="https://wa.me/923325280260?text=Hello,%20I'm%20interested%20in%20buying%20a%20product%20on%20installments.%20Can%20you%20help%20me?"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;