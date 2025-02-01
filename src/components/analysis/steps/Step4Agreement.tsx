import React from 'react';
import { AnalysisFormData } from '../types';

interface Step4AgreementProps {
  formData: AnalysisFormData;
  updateFormData: (data: Partial<AnalysisFormData>) => void;
  onNext: () => void;
}

export function Step4Agreement({
  formData,
  updateFormData,
  onNext,
}: Step4AgreementProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Agreement</h3>
      
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-4">
            By proceeding, you agree to our terms of service, privacy policy, and
            acknowledge that you are paying for AI services, credit monitoring, and
            optional mail services.
          </p>
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              required
              checked={formData.agreedToTerms}
              onChange={(e) => updateFormData({ agreedToTerms: e.target.checked })}
              className="mt-1"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the terms of service and privacy policy
            </label>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              checked={formData.allowContact}
              onChange={(e) => updateFormData({ allowContact: e.target.checked })}
              className="mt-1"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to receive communications about my credit repair progress
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Initial Here
          </label>
          <input
            type="text"
            required
            value={formData.initials}
            onChange={(e) => updateFormData({ initials: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
            maxLength={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Signature
          </label>
          <input
            type="text"
            required
            value={formData.signature}
            onChange={(e) => updateFormData({ signature: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent font-signature"
          />
        </div>

        <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
          <p className="font-bold text-yellow-800 mb-2">IMPORTANT:</p>
          <p className="text-sm text-yellow-700">
            After clicking "Connect My Report", you'll be directed to SmartCredit to set up
            your account. Please return here afterward to complete the setup by providing
            your SmartCredit credentials. This allows our AI to analyze your reports
            monthly and track your progress.
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-colors"
      >
        Connect My Report
      </button>
    </form>
  );
}
