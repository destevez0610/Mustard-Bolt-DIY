import React from 'react';
import { Bot } from 'lucide-react';

interface HeaderProps {
  onAnalyze: () => void;
}

export function Header({ onAnalyze }: HeaderProps) {
  return (
    <header className="container mx-auto px-6 py-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-8 w-8 text-yellow-600" />
          <span className="text-2xl font-bold text-gray-900">Mustard</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-yellow-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-yellow-600 transition-colors">How it Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-yellow-600 transition-colors">Pricing</a>
          <a href="/login" className="text-gray-600 hover:text-yellow-600 transition-colors">My Account</a>
        </div>
        <button 
          onClick={onAnalyze}
          className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}
