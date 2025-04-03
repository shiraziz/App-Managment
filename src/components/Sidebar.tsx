import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Package, CheckCircle, Map, ClipboardCheck, Truck, 
  ShoppingBag, PiggyBank, Beaker, Users, Settings, BookOpen,
  Bot, Smartphone, Store
} from 'lucide-react';
import { clsx } from 'clsx';

const menuItems = [
  { icon: Home, label: 'Home', path: '/dashboard' },
  { icon: CheckCircle, label: 'Order Confirmation', path: '/dashboard/order-confirmation' },
  { icon: Map, label: 'Order Tracking', path: '/dashboard/order-tracking' },
  { icon: ClipboardCheck, label: 'Validation', path: '/dashboard/validation' },
  { icon: Package, label: 'Stock', path: '/dashboard/stock' },
  { icon: Truck, label: 'Shipping', path: '/dashboard/shipping' },
  { icon: ShoppingBag, label: 'Sales Channel', path: '/dashboard/sales' },
  { icon: PiggyBank, label: 'Finances', path: '/dashboard/finances' },
  { icon: Beaker, label: 'Beta', path: '/dashboard/beta' },
  { icon: Users, label: 'Team', path: '/dashboard/team' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  { icon: BookOpen, label: 'Tutorials', path: '/dashboard/tutorials' },
  { icon: Bot, label: 'AI', path: '/dashboard/ai' },
  { icon: Smartphone, label: 'Next Delivery App', path: '/dashboard/delivery-app' },
  { icon: Store, label: 'Seller App', path: '/dashboard/seller-app' },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <nav>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'flex items-center space-x-3 p-3 rounded-lg mb-1 transition-colors',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;