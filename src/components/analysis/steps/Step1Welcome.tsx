import React from 'react';

interface Step1WelcomeProps {
  onNext: () => void;
}

export function Step1Welcome({ onNext }: Step1WelcomeProps) {
  return (
    <div className="text-center">
      <div className="aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/your-video-id"
          title="Credit Repair Process"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Free AI Credit Analysis</h3>
        <p className="text-gray-600 mb-4">
          Get a comprehensive analysis of your credit report, completely free. Our AI will:
        </p>
        <ul className="text-left text-gray-600 space-y-2 mb-4">
          <li>• Create a personalized action plan</li>
          <li>• Identify potential errors and violations</li>
          <li>• Generate custom dispute letters</li>
          <li>• Provide ongoing monitoring and updates</li>
        </ul>
        <p className="text-sm text-gray-500 mb-4">
          This consultation is handled entirely by our AI system and comes with a free
          account for basic credit repair services. Upgrade anytime to access premium
          features and enhanced support.
        </p>
      </div>

      <button
        onClick={onNext}
        className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-colors"
      >
        Start My Analysis
      </button>
    </div>
  );
}
