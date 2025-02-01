import React from 'react';
import { ArrowRight } from 'lucide-react';

export function RecommendedActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Recommended Actions</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium">Dispute Collection Account</h4>
          <p className="text-sm text-gray-600 mt-1">
            We've identified an error in your ABC Collections account. Let's dispute this.
          </p>
          <button className="flex items-center text-yellow-600 font-medium mt-2 text-sm">
            Start Process <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium">Pay Down Credit Cards</h4>
          <p className="text-sm text-gray-600 mt-1">
            Reducing your credit utilization can improve your score by up to 45 points.
          </p>
          <button className="flex items-center text-yellow-600 font-medium mt-2 text-sm">
            View Strategy <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium">Add Utility Payments</h4>
          <p className="text-sm text-gray-600 mt-1">
            Boost your score by adding your utility payment history.
          </p>
          <button className="flex items-center text-yellow-600 font-medium mt-2 text-sm">
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
