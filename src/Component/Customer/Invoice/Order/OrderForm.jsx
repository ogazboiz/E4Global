// OrderForm.js
import React, { useState } from 'react';

const OrderForm = ({ setInvoiceData }) => {
  const [formData, setFormData] = useState({
    dropOffLocation: '',
    recipientName: '',
    orderId: '',
    amount: '',
    customerId: '',
    recipientPhoneNumber: '',
    weight: '',
    itemDescription: '',
    dateIssued: new Date().toLocaleDateString(),
    status: 'Paid',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceData(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow">
      <input
        type="text"
        name="dropOffLocation"
        placeholder="Drop off location"
        value={formData.dropOffLocation}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="customerId"
        placeholder="Customer ID"
        value={formData.customerId}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="recipientName"
        placeholder="Recipient name"
        value={formData.recipientName}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="recipientPhoneNumber"
        placeholder="Recipient phone number"
        value={formData.recipientPhoneNumber}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="orderId"
        placeholder="Order ID"
        value={formData.orderId}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="weight"
        placeholder="Weight (KG)"
        value={formData.weight}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="itemDescription"
        placeholder="Item Description"
        value={formData.itemDescription}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <div className="flex justify-center col-span-2">
        <button type="submit" className="px-4 py-2 text-white bg-orange-500 rounded">
          Create Invoice
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
