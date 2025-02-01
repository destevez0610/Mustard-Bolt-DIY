import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export function AccountSummary() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Account Summary</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span>Accounts in Good Standing</span>
          </div>
          <span className="font-semibold">4</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <XCircle className="w-5 h-5 text-red-500 mr-2" />
            <span>Negative Accounts</span>
          </div>
          <span className="font-semibold">2</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
            <span>Potential Errors</span>
          </div>
          <span className="font-semibold">3</span>
        </div>
      </div>
    </div>
  );
}
