import React from 'react';
import { 
  BarChart, 
  FileText, 
  Home,
  Mail,
  User,
  HelpCircle,
  Bot,
  CreditCard,
  Folder
} from 'lucide-react';

const navigation = [
  { name: 'Overview', icon: Home, href: '/dashboard' },
  { name: 'Credit Report', icon: BarChart, href: '/dashboard/credit-report' },
  { name: 'Dispute Letters', icon: Mail, href: '/dashboard/disputes' },
  { name: 'Documents', icon: Folder, href: '/dashboard/documents' },
  { name: 'Billing', icon: CreditCard, href: '/dashboard/billing' },
  { name: 'Profile', icon: User, href: '/dashboard/profile' },
  { name: 'Help', icon: HelpCircle, href: '/dashboard/help' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="flex items-center space-x-2 px-6 py-4 border-b border-gray-200">
        <Bot className="h-8 w-8 text-yellow-600" />
        <span className="text-xl font-bold">Mustard</span>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
