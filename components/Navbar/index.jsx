import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              MyShop
            </span>
            <span className="hidden sm:inline text-sm text-gray-400 font-light">| My Store</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            <li>
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium text-sm"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium text-sm"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium text-sm"
              >
                Account
              </Link>
            </li>
          </ul>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}