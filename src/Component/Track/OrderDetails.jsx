// OrderDetails.jsx
import React from 'react';
import MapComponent from '../Map/Map';

const OrderDetails = () => {
  return (
    <div className="flex flex-col h-screen p-6 bg-gray-100">
      <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Order ID: 223355</h2>
          <div className="px-3 py-1 text-green-800 bg-green-200 rounded-full">In Transit</div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 mr-2 bg-green-700 rounded-full"></div>
            <div>22 July - Pending - 10:40 AM</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 mr-2 bg-green-700 rounded-full"></div>
            <div>23 July - Transit - 12:30 AM</div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-gray-300 rounded-full"></div>
            <div>24 July - Delivered</div>
          </div>
        </div>
        <MapComponent />
      </div>
    </div>
  );
};

export default OrderDetails;
