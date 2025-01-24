import React from 'react';
import { FaGift } from 'react-icons/fa';

const giftCardOffers = [
  {
    id: 1,
    platform: 'Gyft',
    description: 'Digital gift cards for hundreds of retailers',
    features: ['Instant delivery', 'Wide variety of brands', 'Secure transactions'],
    url: 'https://www.gyft.com/',
    imageUrl: 'https://placehold.co/400x300/67e8f9/ffffff?text=Gyft',
    discount: 'Up to 10% off',
    price: {
      original: 100,
      discounted: 90
    },
    availableValues: [25, 50, 100, 200]
  },
  {
    id: 2,
    platform: 'Woohoo',
    description: 'Premium gift card solutions for all occasions',
    features: ['Multiple brands', 'Corporate gifting', 'Instant redemption'],
    url: 'https://www.woohoo.in/',
    imageUrl: 'https://placehold.co/400x300/67e8f9/ffffff?text=Woohoo',
    discount: 'Up to 15% off',
    price: {
      original: 100,
      discounted: 85
    },
    availableValues: [50, 100, 150, 250]
  },
  {
    id: 3,
    platform: 'Amazon Gift Cards',
    description: 'The perfect gift for anyone who loves shopping',
    features: ['Customizable designs', 'Email delivery', 'Never expires'],
    url: 'https://www.amazon.com/gift-cards',
    imageUrl: 'https://placehold.co/400x300/67e8f9/ffffff?text=Amazon',
    discount: 'Special offers available',
    price: {
      original: 100,
      discounted: 95
    },
    availableValues: [25, 50, 75, 100, 200]
  }
];

function Home() {
  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <header className="bg-cyan-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <FaGift className="text-4xl" />
            <h1 className="text-4xl font-bold">Best Gift Card Deals</h1>
          </div>
          <p className="text-xl">Find and compare the best gift card offers from top platforms</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftCardOffers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => handleCardClick(offer.url)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img 
                src={offer.imageUrl} 
                alt={offer.platform} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{offer.platform}</h2>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-cyan-600 font-semibold">{offer.discount}</p>
                  <div className="text-right">
                    <p className="text-gray-500 line-through">${offer.price.original}</p>
                    <p className="text-2xl font-bold text-green-600">${offer.price.discounted}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{offer.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Available Values:</p>
                  <div className="flex flex-wrap gap-2">
                    {offer.availableValues.map((value) => (
                      <span key={value} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                        ${value}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {offer.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;