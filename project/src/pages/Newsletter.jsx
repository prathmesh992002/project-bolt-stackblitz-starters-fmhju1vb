import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Newsletter Subscription</h1>
        <p className="text-xl text-gray-600 mb-8">
          Get the latest gift card deals and offers delivered directly to your inbox!
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">What You'll Get:</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="h-6 w-6 text-cyan-600 mr-2">✓</span>
              <span>Daily updates on the best gift card deals</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-cyan-600 mr-2">✓</span>
              <span>Exclusive discounts and promotional offers</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-cyan-600 mr-2">✓</span>
              <span>Tips on maximizing savings with gift cards</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-cyan-600 mr-2">✓</span>
              <span>Early access to special deals and limited-time offers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
