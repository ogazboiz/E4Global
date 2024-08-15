import  { useState } from 'react';
import axios from 'axios';

function Track() {
  const [trackingId, setTrackingId] = useState('');
  const [shipmentData, setShipmentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://e4-global-backend.onrender.com/api/v1/shipment/all');
      const data = response.data.data.find(order => order.orderId === trackingId);
      
      if (data) {
        setShipmentData(data);
      } else {
        setError('No data found for this tracking ID');
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="pt-8">
        <h1
          className="text-[#FE9F11]"
          style={{
            fontFamily: "inter",
            fontWeight: "500",
            fontSize: "32px",
          }}
        >
          Track Your Packages
        </h1>
      </div>
      <p className="text-center">
        Input your tracking ID to enable you check the status of your parcel
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

      {error && <p className="text-red-500">{error}</p>}

      {shipmentData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Shipment Details</h2>
            <p><strong>Recipient Name:</strong> {shipmentData.recipientName}</p>
            <p><strong>Product:</strong> {shipmentData.orderDescription.descriptionOfContents}</p>
            <p><strong>Status:</strong> {shipmentData.status}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setShipmentData(null)}
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
