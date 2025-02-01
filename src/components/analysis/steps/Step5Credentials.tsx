import React from 'react';
import { AnalysisFormData } from '../types';

interface Step5CredentialsProps {
  formData: AnalysisFormData;
  updateFormData: (data: Partial<AnalysisFormData>) => void;
  onFinish: () => void;
}

export function Step5Credentials({
  formData,
  updateFormData,
  onFinish,
}: Step5CredentialsProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Connect SmartCredit Account</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            SmartCredit Username
          </label>
          <input
            type="text"
            required
            value={formData.smartCreditUsername}
            onChange={(e) => updateFormData({ smartCreditUsername: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            SmartCredit Password
          </label>
          <input
            type="password"
            required
            value={formData.smartCreditPassword}
            onChange={(e) => updateFormData({ smartCreditPassword: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-colors"
      >
        Finish
      </button>
    </form>
  );
}
