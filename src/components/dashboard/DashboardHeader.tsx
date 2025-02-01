import React, { useState } from 'react';
import { Bell, LogOut, Settings, Share2, ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  onLogout: () => void;
}

export function DashboardHeader({ onLogout }: DashboardHeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showReferralModal, setShowReferralModal] = useState(false);
  const referralLink = 'https://mustard.ai/refer/user123';

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <Bell className="h-6 w-6" />
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2"
            >
              <div className="h-8 w-8 rounded-full bg-yellow-600 text-white flex items-center justify-center">
                JD
              </div>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                <a href="/dashboard/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </a>
                <button 
                  onClick={() => {
                    setShowReferralModal(true);
                    setShowDropdown(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Refer A Friend
                </button>
                <button 
                  onClick={onLogout}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Referral Modal */}
      {showReferralModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">Refer Friends</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Referral Link
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  readOnly
                  value={referralLink}
                  className="flex-1 p-2 border rounded-lg"
                />
                <button 
                  onClick={() => navigator.clipboard.writeText(referralLink)}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Email Referrals */}
              <div className="space-y-4">
                <h3 className="font-semibold">Email Invites</h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Friend's Name"
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Friend's Email"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>

              {/* SMS Referrals */}
              <div className="space-y-4">
                <h3 className="font-semibold">SMS Invites</h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Friend's Name"
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Friend's Phone"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowReferralModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                Send Invites
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
