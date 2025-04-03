import React from 'react';
import { BarChart, Users, Package, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, change }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className={`text-sm mt-2 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '+' : ''}{change}% from last month
        </p>
      </div>
      <Icon className="w-12 h-12 text-blue-500" />
    </div>
  </div>
);

const Home = () => {
  const stats = [
    { icon: BarChart, title: 'Total Revenue', value: '$54,234', change: 12.5 },
    { icon: Users, title: 'Active Users', value: '2,345', change: 8.1 },
    { icon: Package, title: 'Orders', value: '456', change: -2.3 },
    { icon: TrendingUp, title: 'Growth', value: '23%', change: 4.7 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Add activity items here */}
            <p className="text-gray-600">No recent activity to display</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100">
              <Package className="w-6 h-6 text-blue-500 mb-2" />
              <span className="block font-medium">New Order</span>
            </button>
            <button className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100">
              <Users className="w-6 h-6 text-blue-500 mb-2" />
              <span className="block font-medium">Add User</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;