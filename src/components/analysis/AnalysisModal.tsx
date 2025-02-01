import React, { useState } from 'react';
import { X, TrendingUp } from 'lucide-react';
import { AnalysisFormData, AnalysisStep } from './types';
import { Step1Welcome } from './steps/Step1Welcome';
import { Step2PersonalInfo } from './steps/Step2PersonalInfo';
import { Step3Documents } from './steps/Step3Documents';
import { Step4Agreement } from './steps/Step4Agreement';
import { Step5Credentials } from './steps/Step5Credentials';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImproveScore: () => void;
}

const initialFormData: AnalysisFormData = {
  name: '',
  phoneNumber: '',
  email: '',
  ssn: '',
  dateOfBirth: '',
  governmentId: null,
  address: '',
  addressProof: null,
  agreedToTerms: false,
  allowContact: false,
  initials: '',
  signature: '',
  smartCreditUsername: '',
  smartCreditPassword: '',
};

export function AnalysisModal({ isOpen, onClose, onImproveScore }: AnalysisModalProps) {
  const [step, setStep] = useState<AnalysisStep>(1);
  const [formData, setFormData] = useState<AnalysisFormData>(initialFormData);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 4) {
      window.open('https://www.smartcredit.com/join/', '_blank');
    }
    setStep((prev) => (prev + 1) as AnalysisStep);
  };

  const updateFormData = (data: Partial<AnalysisFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold">Credit Analysis</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={onImproveScore}
              className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition-colors flex items-center"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Improve My Score
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {step === 1 && <Step1Welcome onNext={handleNext} />}
            {step === 2 && (
              <Step2PersonalInfo
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
              />
            )}
            {step === 3 && (
              <Step3Documents
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
              />
            )}
            {step === 4 && (
              <Step4Agreement
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
              />
            )}
            {step === 5 && (
              <Step5Credentials
                formData={formData}
                updateFormData={updateFormData}
                onFinish={onImproveScore}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
