import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

function Pricing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600">
          Select the perfect plan for your gift card needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Free</h2>
          <p className="text-4xl font-bold mb-6">₹0<span className="text-gray-500 text-base">/month</span></p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>Basic gift card listings</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>5 offers per day</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>Email support</span>
            </li>
          </ul>
          <Link
            to="/signup"
            className="block w-full text-center bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-lg shadow-md p-8 border-2 border-cyan-500 relative transform scale-105">
          <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
            Limited Time Offer!
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium</h2>
          <p className="text-4xl font-bold mb-6">₹299<span className="text-gray-500 text-base">/month</span></p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>All free features</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>10 offers per day</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>Priority email support</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>Early access to deals</span>
            </li>
          </ul>
          <Link
            to="/signup"
            className="block w-full text-center bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors"
          >
            Get Premium
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro</h2>
          <p className="text-4xl font-bold mb-6">₹599<span className="text-gray-500 text-base">/month</span></p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>All premium features</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>20 offers per day</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>24/7 priority support</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>Exclusive newsletter access</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>Custom deal alerts</span>
            </li>
          </ul>
          <Link
            to="/signup"
            className="block w-full text-center bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
          >
            Get Pro
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;