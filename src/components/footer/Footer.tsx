import React from 'react';
import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-yellow-600" />
              <span className="text-2xl font-bold">Mustard</span>
            </div>
            <p className="text-gray-400">AI-powered credit repair for everyone</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-600">About</a></li>
              <li><a href="#" className="hover:text-yellow-600">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-600">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-600">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-yellow-600">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-600">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mustard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
