import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Fazal Electronics
          </h2>

          <p className="text-gray-300">
            Genuine electronics with easy installment plans in
            Rawalpindi. We provide trusted products and friendly
            customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="flex items-center gap-2">
            <FaPhone />
            +92 332 5280260
          </p>

          <p className="flex items-center gap-2 mt-3">
            <a href="https://wa.me/923001234567"
              target="_blank"   rel="noopener noreferrer"  aria-label="Contact us on WhatsApp">

              <FaWhatsapp />
            </a>
            WhatsApp
          </p>

          <p className="flex items-center gap-2 mt-3">
            <FaEnvelope />
            fazalinstalment@gmail.com
          </p>

          <p className="flex items-center gap-2 mt-3">
            <FaMapMarkerAlt />
            Rawalpindi, Pakistan
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-3xl">
            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="https://wa.me/923001234567"
              target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 Fazal Electronics. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;