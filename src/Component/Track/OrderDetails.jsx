import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from '../Map/Map';

const OrderDetails = () => {
  const [shipmentId, setShipmentId] = useState("");
  const [pieceId, setPieceId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setError(null);
    setSearching(true);
    fetchShipmentDetails();
  };

  const handleCancel = () => {
    setShipmentId("");
    setPieceId("");
    setShipment(null);
    setError(null);
    setSearching(false);
    setLoading(false);  // Reset loading state when cancelling search
  };

  const fetchShipmentDetails = async () => {
    try {
      const response = await axios.get(`https://e4-global-backend.onrender.com/api/v1/shipment/tracking/${shipmentId}`);
      const foundShipment = response.data.shipments.find(shipment => 
        shipment.details.pieceIds && shipment.details.pieceIds.includes(pieceId)
      );
      setShipment(foundShipment);
      if (!foundShipment) {
        setError("No shipment found for the provided Piece ID.");
      }
    } catch (err) {
      setError("Failed to fetch shipment details. Please try again.");
    } finally {
      setLoading(false); // Stop loading after data is fetched
    }
  };

  const getShipmentStatus = () => {
    if (!shipment || !shipment.status) return 'Unknown';
    const status = shipment.status.statusCode;

    if (status === 'delivered') {
      return 'Delivered';
    } else if (status === 'transit') {
      return 'In Transit';
    } else {
      return 'Pending';
    }
  };

  const formatEventDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-gray-100">
      {!searching ? (
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-2">Track Your Shipment</h2>
          <p className="mb-4 text-gray-600">Please enter your Shipment ID and Piece ID to track your package.</p>
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={shipmentId}
              onChange={(e) => setShipmentId(e.target.value)}
              placeholder="Shipment ID"
              className="mr-2 px-3 py-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={pieceId}
              onChange={(e) => setPieceId(e.target.value)}
              placeholder="Piece ID"
              className="mr-2 px-3 py-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-orange-500 text-white rounded"
              disabled={!shipmentId || !pieceId}
            >
              Track
            </button>
          </div>
          {error && <p className="text-red-600">{error}</p>}
        </div>
      ) : (
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
          {loading ? (
            <p>Loading shipment details...</p>
          ) : (
            <>
              {shipment ? (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold">Piece ID: {pieceId}</h2>
                    <div className={`px-3 py-1 rounded-full ${
                      getShipmentStatus() === 'Delivered' ? 'bg-gray-300 text-gray-800' :
                      getShipmentStatus() === 'In Transit' ? 'bg-green-200 text-green-800' :
                      'bg-yellow-200 text-yellow-800'
                    }`}>
                      {getShipmentStatus()}
                    </div>
                  </div>
                  <div className="mb-4">
                    {shipment?.events?.filter(event => 
                      event.pieceIds && event.pieceIds.includes(pieceId)
                    ).map((event, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <div className={`w-2 h-2 mr-2 rounded-full ${
                          event.statusCode === 'delivered' ? 'bg-gray-300' :
                          event.statusCode === 'transit' ? 'bg-green-700' :
                          'bg-yellow-500'
                        }`}></div>
                        <div>{formatEventDate(event.timestamp)} - {event.description}</div>
                      </div>
                    ))}
                  </div>
                  <MapComponent address={shipment?.status?.location?.address?.addressLocality || ''} />
                </>
              ) : (
                <p>No shipment found for the provided Piece ID.</p>
              )}
              <button
                onClick={handleCancel}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Cancel and Search Again
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
