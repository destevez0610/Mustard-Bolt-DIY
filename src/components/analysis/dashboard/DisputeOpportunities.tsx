import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function DisputeOpportunities() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Dispute Opportunities</h3>
      <div className="space-y-4">
        <div className="p-4 bg-red-50 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-1 mr-2" />
            <div>
              <h4 className="font-medium text-red-900">Collection Account</h4>
              <p className="text-sm text-red-700 mt-1">ABC Collections - $1,250</p>
              <p className="text-xs text-red-600 mt-1">Potential Error: Incorrect Balance</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 mr-2" />
            <div>
              <h4 className="font-medium text-yellow-900">Late Payment</h4>
              <p className="text-sm text-yellow-700 mt-1">XYZ Bank - 30 Days Late</p>
              <p className="text-xs text-yellow-600 mt-1">Potential Error: Payment was on time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
