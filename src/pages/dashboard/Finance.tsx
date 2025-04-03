import React from 'react';
import { DollarSign, TrendingUp, CreditCard, PieChart } from 'lucide-react';

const Finance = () => {
  const financialMetrics = [
    {
      title: 'Total Revenue',
      value: '$128,430',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
    },
    {
      title: 'Monthly Sales',
      value: '$32,680',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      title: 'Average Order Value',
      value: '$245',
      change: '+5.3%',
      trend: 'up',
      icon: CreditCard,
    },
    {
      title: 'Profit Margin',
      value: '28.6%',
      change: '+2.1%',
      trend: 'up',
      icon: PieChart,
    },
  ];

  const recentTransactions = [
    {
      id: 'TRX-001',
      type: 'Sale',
      amount: '$299.99',
      customer: 'John Doe',
      date: '2024-03-15',
      status: 'completed',
    },
    {
      id: 'TRX-002',
      type: 'Refund',
      amount: '-$149.99',
      customer: 'Jane Smith',
      date: '2024-03-14',
      status: 'processed',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Financial Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {financialMetrics.map((metric) => (
          <div key={metric.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <metric.icon className="h-6 w-6 text-indigo-600" />
              <span className={`text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <p className="text-sm text-gray-600">{metric.title}</p>
            <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium">{transaction.type}</p>
                  <p className="text-sm text-gray-500">{transaction.customer}</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.type === 'Sale' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Breakdown</h2>
          <div className="h-64 flex items-center justify-center">
            <PieChart className="h-32 w-32 text-gray-400" />
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Financial Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
            <p className="font-medium">Income Statement</p>
            <p className="text-sm text-gray-500">Monthly overview</p>
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
            <p className="font-medium">Balance Sheet</p>
            <p className="text-sm text-gray-500">Current status</p>
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
            <p className="font-medium">Cash Flow</p>
            <p className="text-sm text-gray-500">Daily tracking</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finance;