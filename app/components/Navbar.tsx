'use client';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-2xl font-extrabold text-pink-600">
         Naksh Jewel
        <span className="text-gray-700">Jewellery</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/products" className="hover:text-pink-600 transition">
            Shop
          </Link>
          <Link href="/about" className="hover:text-pink-600 transition">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingCart size={24} className="text-gray-700 hover:text-pink-600 transition" />
            <span className="absolute -top-1 -right-2 bg-pink-600 text-white text-xs rounded-full px-1">
              3
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
