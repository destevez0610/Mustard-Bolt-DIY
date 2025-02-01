import React from 'react';
import { AnalysisFormData } from '../types';

interface Step3DocumentsProps {
  formData: AnalysisFormData;
  updateFormData: (data: Partial<AnalysisFormData>) => void;
  onNext: () => void;
}

export function Step3Documents({
  formData,
  updateFormData,
  onNext,
}: Step3DocumentsProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Required Documents</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Government-issued ID
          </label>
          <p className="text-sm text-gray-500 mb-2">
            Upload a clear photo of your driver's license, passport, or other government ID
          </p>
          <input
            type="file"
            required
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              updateFormData({ governmentId: file });
            }}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Home Address
          </label>
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Proof of Address
          </label>
          <p className="text-sm text-gray-500 mb-2">
            Upload a utility bill, bank statement, or other document showing your name and address
          </p>
          <input
            type="file"
            required
            accept="image/*,.pdf"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              updateFormData({ addressProof: file });
            }}
            className="w-full"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-colors"
      >
        Next
      </button>
    </form>
  );
}
