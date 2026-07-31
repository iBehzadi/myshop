import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">Khanomi Shop</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Your one‑stop shop for quality products. We bring you the best
              deals and a seamless shopping experience.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-500 hover:text-blue-600 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:text-blue-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-500 hover:text-blue-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Support
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/faq" className="text-gray-500 hover:text-blue-600 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-500 hover:text-blue-600 transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-500 hover:text-blue-600 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-500 hover:text-blue-600 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Stay Connected
            </h4>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              <span className="block">support@Khanomi Shop.com</span>
              <span className="block">+1 (555) 123‑4567</span>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Khanomi Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}