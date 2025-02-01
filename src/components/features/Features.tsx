import React from 'react';
import { FileText, Scale, ScrollText, Sparkles } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          AI-Powered Credit Repair Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 text-center">
            <FileText className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Report Analysis</h3>
            <p className="text-gray-600">Advanced AI parsing of credit reports to identify errors and violations</p>
          </div>
          <div className="p-6 text-center">
            <Scale className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Legal Expertise</h3>
            <p className="text-gray-600">Leverages CFPB, FDCPA, FCRA, and Metro2 guidelines</p>
          </div>
          <div className="p-6 text-center">
            <ScrollText className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Disputes</h3>
            <p className="text-gray-600">Generate personalized dispute letters for all three bureaus</p>
          </div>
          <div className="p-6 text-center">
            <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Monitor improvements and track dispute status</p>
          </div>
        </div>
      </div>
    </section>
  );
}
