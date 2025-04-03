/** @jsxImportSource react */
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import DashboardLayout from './components/DashboardLayout';
import OrderConfirmation from './pages/dashboard/OrderConfirmation';
import Home from './pages/dashboard/Home';

// Autres composants
const OrderTracking = () => <div className="p-4"><h1 className="text-2xl font-bold">Order Tracking</h1></div>;
const Validation = () => <div className="p-4"><h1 className="text-2xl font-bold">Validation</h1></div>;
const Stock = () => <div className="p-4"><h1 className="text-2xl font-bold">Stock Management</h1></div>;
const Shipping = () => <div className="p-4"><h1 className="text-2xl font-bold">Shipping</h1></div>;
const SalesChannel = () => <div className="p-4"><h1 className="text-2xl font-bold">Sales Channel</h1></div>;
const Finances = () => <div className="p-4"><h1 className="text-2xl font-bold">Finances</h1></div>;
const Beta = () => <div className="p-4"><h1 className="text-2xl font-bold">Beta Features</h1></div>;
const Team = () => <div className="p-4"><h1 className="text-2xl font-bold">Team Management</h1></div>;
const Settings = () => <div className="p-4"><h1 className="text-2xl font-bold">Settings</h1></div>;
const Tutorials = () => <div className="p-4"><h1 className="text-2xl font-bold">Tutorials</h1></div>;
const AI = () => <div className="p-4"><h1 className="text-2xl font-bold">AI Features</h1></div>;
const DeliveryApp = () => <div className="p-4"><h1 className="text-2xl font-bold">Next Delivery App</h1></div>;
const SellerApp = () => <div className="p-4"><h1 className="text-2xl font-bold">Seller App</h1></div>;

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
          <Route path="order-tracking" element={<OrderTracking />} />
          <Route path="validation" element={<Validation />} />
          <Route path="stock" element={<Stock />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="sales" element={<SalesChannel />} />
          <Route path="finances" element={<Finances />} />
          <Route path="beta" element={<Beta />} />
          <Route path="team" element={<Team />} />
          <Route path="settings" element={<Settings />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="ai" element={<AI />} />
          <Route path="delivery-app" element={<DeliveryApp />} />
          <Route path="seller-app" element={<SellerApp />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;