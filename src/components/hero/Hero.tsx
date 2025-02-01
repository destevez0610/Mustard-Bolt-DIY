import React from 'react';

interface HeroProps {
  onAnalyze: () => void;
}

export function Hero({ onAnalyze }: HeroProps) {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Repair Your Credit with
        <span className="text-yellow-600"> AI Precision</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Mustard combines artificial intelligence with consumer protection laws to help you achieve the credit score you deserve.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          onClick={onAnalyze}
          className="bg-yellow-600 text-white px-8 py-4 rounded-full text-lg hover:bg-yellow-700 transition-colors"
        >
          Analyze My Report
        </button>
        <button className="bg-white text-yellow-600 px-8 py-4 rounded-full text-lg border-2 border-yellow-600 hover:bg-yellow-50 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}
