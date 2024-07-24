import axios from 'axios';
import { useState } from 'react';

const OrderForm = () => {
  const initialFormData = {
    customerId: '',
    recipientName: '',
    orderId: '',
    dropLocation: '',
    shipmentDate: '',
    packagingType: '',
    totalWeight: '',
    declaredValue: '',
    status: 'pending',
    orderDescription: {
      weight: '',
      quantity: '',
      descriptionOfContents: '',
      unitValue: '',
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in formData.orderDescription) {
      setFormData((prevData) => ({
        ...prevData,
        orderDescription: {
          ...prevData.orderDescription,
          [name]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(
        'https://e4-global-backend.onrender.com/api/v1/shipment/',
        formData
      );

      console.log('Response:', response.data);
      setSuccess('Order created successfully!');
      
      // Reset form data
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error:', error);
      setError(error.response?.data?.message || 'Error Creating Order');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-orange-500">
          Create Order
        </h1>
        {success && (
          <div className="mb-4 text-center text-green-600">{success}</div>
        )}
        {error && (
          <div className="mb-4 text-center text-red-600">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="customerId">
                  Customer ID
                </label>
                <input
                  type="text"
                  id="customerId"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="recipientName">
                  Recipient Name
                </label>
                <input
                  type="text"
                  id="recipientName"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="orderId">
                  Order ID
                </label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="dropLocation">
                  Drop Location
                </label>
                <input
                  type="text"
                  id="dropLocation"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="shipmentDate">
                  Shipment Date
                </label>
                <input
                  type="datetime-local"
                  id="shipmentDate"
                  name="shipmentDate"
                  value={formData.shipmentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="packagingType">
                  Packaging Type
                </label>
                <input
                  type="text"
                  id="packagingType"
                  name="packagingType"
                  value={formData.packagingType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="totalWeight">
                  Total Weight
                </label>
                <input
                  type="number"
                  id="totalWeight"
                  name="totalWeight"
                  value={formData.totalWeight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="declaredValue">
                  Declared Value
                </label>
                <input
                  type="number"
                  id="declaredValue"
                  name="declaredValue"
                  value={formData.declaredValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="weight">
                  Weight
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.orderDescription.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.orderDescription.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="descriptionOfContents">
                  Description of Contents
                </label>
                <input
                  type="text"
                  id="descriptionOfContents"
                  name="descriptionOfContents"
                  value={formData.orderDescription.descriptionOfContents}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold" htmlFor="unitValue">
                  Unit Value
                </label>
                <input
                  type="number"
                  id="unitValue"
                  name="unitValue"
                  value={formData.orderDescription.unitValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-700"
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
