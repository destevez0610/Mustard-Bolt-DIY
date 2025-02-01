import React from 'react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  highlighted?: boolean;
}

export function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  ctaText, 
  highlighted = false 
}: PricingCardProps) {
  return (
    <div className={`
      rounded-2xl p-8 h-full flex flex-col
      ${highlighted 
        ? 'bg-yellow-600 text-white shadow-xl scale-105 transform' 
        : 'bg-white text-gray-900 shadow-sm'
      }
    `}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-sm ml-2">/month</span>}
        </div>
        <p className={`${highlighted ? 'text-yellow-50' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className={`text-xl ${highlighted ? 'text-yellow-50' : 'text-yellow-600'}`}>
              {feature.included ? '✓' : '•'}
            </span>
            <span className={highlighted ? 'text-yellow-50' : 'text-gray-600'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <button className={`
        w-full py-3 px-6 rounded-full font-semibold transition-colors
        ${highlighted 
          ? 'bg-white text-yellow-600 hover:bg-yellow-50' 
          : 'bg-yellow-600 text-white hover:bg-yellow-700'
        }
      `}>
        {ctaText}
      </button>
    </div>
  );
}
