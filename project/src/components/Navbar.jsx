import React from 'react';
import { Link } from 'react-router-dom';
import { FaGift, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaGift className="text-2xl" />
            <span className="font-bold text-xl">Gift Card Marketplace</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-cyan-200">Home</Link>
            <Link to="/pricing" className="hover:text-cyan-200">Pricing</Link>
            <Link to="/newsletter" className="hover:text-cyan-200">Newsletter</Link>
            <Link to="/about" className="hover:text-cyan-200">About</Link>
            <Link to="/contact" className="hover:text-cyan-200">Contact</Link>
            <div className="flex items-center space-x-2">
              <Link to="/signin" className="flex items-center space-x-1 hover:text-cyan-200">
                <FaUser />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;