import React, { useState, useEffect } from 'react';

function AddOrderModal({ isOpen, onClose, onSave, initialData }) {
  // États pour les champs du formulaire
  const [orderNumber, setOrderNumber] = useState('');
  const [status, setStatus] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Réinitialiser les champs lorsque le modal est ouvert ou fermé
  useEffect(() => {
    if (isOpen && initialData) {
      // Pré-remplir les champs si initialData est fourni (mode édition)
      setOrderNumber(initialData.orderNumber || '');
      setStatus(initialData.status || '');
      setFullName(initialData.fullName || '');
      setPhone(initialData.phone || '');
      setAddress(initialData.address || '');
      setProduct(initialData.product || '');
      setPrice(initialData.productPrice || 0);
      setQuantity(initialData.quantity || 1);
    } else if (isOpen) {
      // Réinitialiser les champs si le modal est ouvert en mode ajout
      setOrderNumber('');
      setStatus('');
      setFullName('');
      setPhone('');
      setAddress('');
      setProduct('');
      setPrice(0);
      setQuantity(1);
    }
  }, [isOpen, initialData]);

  const totalPrice = price * quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      id: initialData ? initialData.id : Date.now(), // Utiliser l'ID existant en mode édition
      orderNumber,
      status,
      fullName,
      phone,
      address,
      product,
      productPrice: price,
      total: totalPrice,
    };
    onSave(orderData); // Appeler la fonction onSave pour sauvegarder la commande
    onClose(); // Fermer le modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">{initialData ? 'Edit Order' : 'Add New Order'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Ligne 1 : Order Number et Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Order Number*</label>
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status*</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select...</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>

          {/* Ligne 2 : Full Name et Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name*</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone*</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only numbers
                  if (/^\d*$/.test(value)) {
                    setPhone(value);
                  }
                }}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          {/* Ligne 3 : Address et Product */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Address*</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Product*</label>
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          {/* Ligne 4 : Price, Quantity et Total Price */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Price*</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity*</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Price</label>
              <input
                type="text"
                value={`$${totalPrice.toFixed(2)}`}
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddOrderModal;