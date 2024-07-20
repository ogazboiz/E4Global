// Invoice.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Invoice = ({ data }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (!data) return null;

  return (
    <div>
      <div ref={componentRef} className="p-4 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-2xl font-bold text-center text-orange-500">Invoice</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Drop off location</p>
            <p className="font-bold">{data.dropOffLocation}</p>
          </div>
          <div>
            <p>Date issued</p>
            <p className="font-bold">{data.dateIssued}</p>
          </div>
          <div>
            <p>Order ID</p>
            <p className="font-bold">{data.orderId}</p>
          </div>
          <div>
            <p>Customer ID</p>
            <p className="font-bold">{data.customerId}</p>
          </div>
          <div>
            <p>Recipient name</p>
            <p className="font-bold">{data.recipientName}</p>
          </div>
          <div>
            <p>Recipient phone number</p>
            <p className="font-bold">{data.recipientPhoneNumber}</p>
          </div>
          <div>
            <p>Weight (KG)</p>
            <p className="font-bold">{data.weight}</p>
          </div>
          <div>
            <p>Item description</p>
            <p className="font-bold">{data.itemDescription}</p>
          </div>
          <div>
            <p>Amount</p>
            <p className="font-bold">{data.amount}</p>
          </div>
          <div>
            <p>Status</p>
            <p className="font-bold">{data.status}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrint} className="px-4 py-2 text-white bg-orange-500 rounded">
          Print
        </button>
      </div>
    </div>
  );
};

export default Invoice;
