import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export function CreditFactors() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Credit Factors</h3>
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Payment History</span>
            <div className="flex items-center">
              <XCircle className="w-4 h-4 text-red-500 mr-1" />
              <span className="text-sm text-red-500">Poor</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-red-500 rounded-full" style={{ width: '35%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Credit Utilization</span>
            <div className="flex items-center">
              <AlertCircle className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-sm text-yellow-500">Fair</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Credit Age</span>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">Good</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
