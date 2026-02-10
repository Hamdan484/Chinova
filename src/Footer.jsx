import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">☕ Chinova</h2>
          <p className="text-sm leading-relaxed">
            Where great coffee creates great moments.  
            Crafted with passion. Served with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
          <ul className="text-sm space-y-2">
            <li>Mon - Fri: 7:00am - 9:00pm</li>
            <li>Saturday: 8:00am - 10:00pm</li>
            <li>Sunday: 8:00am - 8:00pm</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Kumasi, Ghana</li>
            <li>📞 +233 597 888 61</li>
            <li>✉️ ibrahimhamsik3@gmail.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📸</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Chinova Coffee. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
