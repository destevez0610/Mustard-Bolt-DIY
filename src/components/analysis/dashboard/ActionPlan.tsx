import React from 'react';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export function ActionPlan() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Your Action Plan</h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold">Dispute Collection Account</h4>
            <p className="text-gray-600 text-sm mt-1">
              ABC Collections account shows incorrect balance. We'll help you dispute this with documentation.
            </p>
            <button className="flex items-center text-yellow-600 font-medium mt-2">
              Start Dispute <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <Clock className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h4 className="font-semibold">Reduce Credit Utilization</h4>
            <p className="text-gray-600 text-sm mt-1">
              Your credit utilization is at 45%. Aim to reduce this below 30% for a better score.
            </p>
            <button className="flex items-center text-yellow-600 font-medium mt-2">
              View Strategy <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
