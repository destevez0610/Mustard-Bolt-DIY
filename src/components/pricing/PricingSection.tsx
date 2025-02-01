import React from 'react';
import { PricingCard } from './PricingCard';

const faithFeatures = [
  { text: 'DIY with AI-Generated Letters', included: true },
  { text: 'AI-Guided Action Plan', included: true },
  { text: '3 Bureau Letters', included: true },
  { text: 'Print & Mail or Mail Online', included: true },
  { text: 'Basic Dashboard Access', included: true },
  { text: 'Knowledge Base & Training', included: true },
  { text: 'Third-party Credit Monitoring Required', included: true },
];

const seedFeatures = [
  { text: 'AI-Generated Letters & Action Plan', included: true },
  { text: 'Credit Monitoring Included', included: true },
  { text: '3 Bureau Letters', included: true },
  { text: 'Creditor Letters', included: true },
  { text: 'Debt Collector Letters', included: true },
  { text: 'Print & Mail or Mail Online', included: true },
  { text: 'Full Dashboard & Progress Tracking', included: true },
  { text: 'Knowledge Base & Training', included: true },
];

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Path to Better Credit
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your needs and start your journey to credit repair today
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Faith"
            price="Free"
            description="Perfect for DIY credit repair with AI guidance"
            features={faithFeatures}
            ctaText="Get Started Free"
          />
          <PricingCard
            name="Seed"
            price="$47"
            description="Complete AI-powered credit repair solution"
            features={seedFeatures}
            ctaText="Choose Seed"
            highlighted={true}
          />
        </div>
      </div>
    </section>
  );
}
