import React from 'react';
import { FaGift, FaShieldAlt, FaHandshake, FaUserFriends } from 'react-icons/fa';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 mb-8">
            Gift Card Marketplace is your trusted destination for finding the best gift card deals
            from multiple platforms. We aggregate offers from leading gift card providers to help
            you save money and make informed decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <FaShieldAlt className="text-4xl text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">
                We ensure all transactions are safe and secure through our trusted partners.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <FaHandshake className="text-4xl text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
              <p className="text-gray-600">
                We partner with top platforms to bring you the best gift card deals.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            Our mission is to simplify the gift card buying process by providing a single platform
            where users can compare and find the best deals across multiple providers. We believe
            in transparency, security, and customer satisfaction.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span>Comprehensive comparison of gift card offers</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span>Direct links to official retailers</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span>Regular updates on new deals and discounts</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span>Verified and trusted platform partners</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;