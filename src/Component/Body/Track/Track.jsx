import { useState } from 'react';
import axios from 'axios';

function Track() {
  const [trackingId, setTrackingId] = useState('');
  const [shipmentData, setShipmentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setShipmentData(null);
    try {
      const response = await axios.get('https://e4-global-backend.onrender.com/api/v1/shipment/all');
      const shipments = response.data.data.shipments;
      const data = shipments.find(
        order => order.orderId === trackingId || order.customerId === trackingId
      );

      if (data) {
        setShipmentData(data);
      } else {
        setError('No data found for this tracking ID');
      }
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err); // Log the exact error for debugging
    } finally {
      setLoading(false);
      setTrackingId(''); // Clear input field after search
    }
  };

  const closeModal = () => {
    setShipmentData(null);
    setError('');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="pt-8">
        <h1 className="text-[#FE9F11]" style={{ fontFamily: "inter", fontWeight: "500", fontSize: "32px" }}>
          Track Your Packages
        </h1>
      </div>
      <p className="text-center">
        Input your tracking ID to check the status of your parcel
      </p>

      <div className="flex items-center w-full max-w-screen-lg p-6 mb-11">
        <label
          htmlFor="trackingId"
          className="relative flex-grow block h-20 border border-gray-400 rounded-s-lg shadow-sm focus-within:border-[#93AE5B] focus-within:ring-1 focus-within:ring-[#93AE5B]"
        >
          <input
            type="text"
            id="trackingId"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full h-20 p-4 bg-[#d8d7d7] text-black border-none peer focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Input Tracking ID"
          />
        </label>
        <button
          type="submit"
          onClick={handleSearch}
          className="bg-[#93AE5B] h-[80px] w-44 rounded-e-xl"
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>

      {shipmentData && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal} // Close modal on overlay click
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-2xl font-bold mb-4">Shipment Details</h2>
            <p><strong>Recipient Name:</strong> {shipmentData.recipientName}</p>
            <p><strong>Product:</strong> {shipmentData.orderDescription.descriptionOfContents}</p>
            <p><strong>Drop-off Location:</strong> {shipmentData.dropLocation}</p>
            <p><strong>Weight:</strong> {shipmentData.orderDescription.weight} kg</p>
            <p><strong>Status:</strong> {shipmentData.status}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {error && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal} // Close modal on overlay click
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-2xl font-bold mb-4">Error</h2>
            <p>{error}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Track;
