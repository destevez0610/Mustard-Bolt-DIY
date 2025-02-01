import React from 'react';
import { ArrowUp, ArrowDown, AlertCircle } from 'lucide-react';

export function Overview() {
  return (
    <div className="space-y-6">
      {/* Credit Score Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Credit Score Overview</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold text-gray-900">682</p>
            <div className="flex items-center text-green-600 mt-2">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>+15 points this month</span>
            </div>
          </div>
          <div className="h-32 w-32 rounded-full border-8 border-yellow-600 flex items-center justify-center">
            <span className="text-2xl font-bold">Fair</span>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Action Items</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
              <div>
                <p className="font-medium text-red-900">Collection Account Reported</p>
                <p className="text-sm text-red-700">ABC Collections - $1,250</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-full text-sm">
              Dispute Now
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-3" />
              <div>
                <p className="font-medium text-yellow-900">High Credit Utilization</p>
                <p className="text-sm text-yellow-700">Currently at 45%</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-full text-sm">
              View Tips
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="font-medium">Dispute Letter Sent</p>
              <p className="text-sm text-gray-600">Equifax - Late Payment</p>
            </div>
            <span className="text-sm text-gray-600">2 days ago</span>
          </div>
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="font-medium">Credit Score Updated</p>
              <p className="text-sm text-gray-600">+5 points</p>
            </div>
            <span className="text-sm text-gray-600">1 week ago</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Account Removed</p>
              <p className="text-sm text-gray-600">Collections Account</p>
            </div>
            <span className="text-sm text-gray-600">2 weeks ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
