import React from 'react';
import { TrendingUp } from 'lucide-react';

export function CreditScore() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Credit Score</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-yellow-600">682</p>
          <div className="flex items-center text-green-600 mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+15 points this month</span>
          </div>
        </div>
        <div className="w-32 h-32 relative">
          <svg className="transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#CA8A04"
              strokeWidth="3"
              strokeDasharray="75, 100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-semibold">Fair</span>
          </div>
        </div>
      </div>
    </div>
  );
}
