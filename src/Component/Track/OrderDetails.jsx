import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from '../Map/Map';
import { useOutletContext } from 'react-router-dom';

const OrderDetails = ({ shipmentId }) => {
  const { searchTerm } = useOutletContext();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      setShipment(null);
      setLoading(false);
      return;
    }

    const fetchShipmentDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://e4-global-backend.onrender.com/api/v1/shipment/tracking/${shipmentId}`);
        const foundShipment = response.data.shipments.find(shipment => 
          shipment.details.pieceIds && shipment.details.pieceIds.includes(searchTerm)
        );
        setShipment(foundShipment);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShipmentDetails();
  }, [shipmentId, searchTerm]);

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

  if (loading) return <p>Loading shipment details...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!shipment) return <p>No shipment found for the provided Piece ID.</p>;

  return (
    <div className="flex flex-col h-screen p-6 bg-gray-100">
      <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Piece ID: {searchTerm}</h2>
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
            event.pieceIds && event.pieceIds.includes(searchTerm)
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
      </div>
    </div>
  );
};

export default OrderDetails;
