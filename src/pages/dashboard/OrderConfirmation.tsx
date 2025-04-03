import React, { useState, useEffect } from 'react';
import AddOrderModal from '../../components/AddOrderModal';

const OrderConfirmation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOrder, setEditOrder] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Charger les commandes depuis localStorage au démarrage
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [
      {
        id: 1,
        orderNumber: 'ORD001',
        fullName: 'John Doe',
        phone: '1234567890',
        status: 'Confirmed',
        address: '123 Main St',
        product: 'Product A',
        productPrice: 100,
        total: 100,
      },
      {
        id: 2,
        orderNumber: 'ORD002',
        fullName: 'Jane Smith',
        phone: '9876543210',
        status: 'Pending',
        address: '456 Elm St',
        product: 'Product B',
        productPrice: 200,
        total: 200,
      },
    ];
  });

  // Sauvegarder les commandes dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleSaveOrder = (newOrder) => {
    if (editOrder) {
      setOrders(orders.map(order => (order.id === editOrder.id ? { ...order, ...newOrder } : order)));
    } else {
      setOrders([...orders, { ...newOrder, id: Date.now() }]); // Utiliser Date.now() pour un ID unique
    }
    setIsModalOpen(false);
    setEditOrder(null);
  };

  const handleEditOrder = (order) => {
    setEditOrder(order);
    setIsModalOpen(true);
  };

  const handleDeleteOrder = (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      setOrders(orders.filter(order => order.id !== id));
    }
  };

  const handleShowOrder = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <button
        onClick={() => {
          setEditOrder(null);
          setIsModalOpen(true);
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Add Order
      </button>

      <button
        onClick={() => setIsContentVisible(!isContentVisible)}
        className="px-4 py-2 bg-gray-500 text-white rounded mb-4"
      >
        {isContentVisible ? 'Hide Orders' : 'Show Orders'}
      </button>

      {isContentVisible && (
        <div className="mt-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Order Number</th>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Full Name</th>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Phone</th>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Status</th>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Address</th>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Product</th>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Product Price</th>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Total</th>
                <th className="px-4 py-2 border-b bg-gray-100 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2 border-b">{order.orderNumber}</td>
                  <td className="px-4 py-2 border-b">{order.fullName}</td>
                  <td className="px-4 py-2 border-b">{order.phone}</td>
                  <td className="px-4 py-2 border-b">{order.status}</td>
                  <td className="px-4 py-2 border-b">{order.address}</td>
                  <td className="px-4 py-2 border-b">{order.product}</td>
                  <td className="px-4 py-2 border-b">${order.productPrice.toFixed(2)}</td>
                  <td className="px-4 py-2 border-b">${order.total.toFixed(2)}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleShowOrder(order)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Show
                    </button>
                    <button
                      onClick={() => handleEditOrder(order)}
                      className="text-green-500 hover:text-green-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <div className="space-y-3">
              <div>
                <strong>Order Number:</strong> {selectedOrder.orderNumber}
              </div>
              <div>
                <strong>Full Name:</strong> {selectedOrder.fullName}
              </div>
              <div>
                <strong>Phone:</strong> {selectedOrder.phone}
              </div>
              <div>
                <strong>Status:</strong> {selectedOrder.status}
              </div>
              <div>
                <strong>Address:</strong> {selectedOrder.address}
              </div>
              <div>
                <strong>Product:</strong> {selectedOrder.product}
              </div>
              <div>
                <strong>Product Price:</strong> ${selectedOrder.productPrice.toFixed(2)}
              </div>
              <div>
                <strong>Total:</strong> ${selectedOrder.total.toFixed(2)}
              </div>
            </div>
            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <AddOrderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditOrder(null);
        }}
        onSave={handleSaveOrder}
        initialData={editOrder}
      />
    </div>
  );
};

export default OrderConfirmation;