const Inventorys = () => {
  const orders = [
    {
      orderId: "255623",
      customerId: "9292",
      dropOffLocation: "Abuja",
      recipientName: "Kate Holt",
      recipientNo: "08142424234",
      weight: "50 KG",
      amount: "1,000",
      itemDescription: "Food stuff",
      dateSent: "12-10-24",
      status: "Delivered",
    },
    // Add more orders here
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="p-4 text-center bg-white rounded shadow">
          <p className="text-gray-600">Total number of orders</p>
          <p className="text-2xl font-bold text-orange-500">120</p>
        </div>
        <div className="p-4 text-center bg-white rounded shadow">
          <p className="text-gray-600">Active orders</p>
          <p className="text-2xl font-bold text-orange-500">120</p>
        </div>
        <div className="p-4 text-center bg-white rounded shadow">
          <p className="text-gray-600">Pending orders</p>
          <p className="text-2xl font-bold text-orange-500">120</p>
        </div>
        <div className="p-4 text-center bg-white rounded shadow">
          <p className="text-gray-600">Total number of customers</p>
          <p className="text-2xl font-bold text-orange-500">120</p>
        </div>
      </div>
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">Order ID</th>
              <th className="px-4 py-2 border-b border-gray-200">
                Customer ID
              </th>
              <th className="px-4 py-2 border-b border-gray-200">
                Drop off location
              </th>
              <th className="px-4 py-2 border-b border-gray-200">
                Recipient Name
              </th>
              <th className="px-4 py-2 border-b border-gray-200">
                Recipient No.
              </th>
              <th className="px-4 py-2 border-b border-gray-200">Weight</th>
              <th className="px-4 py-2 border-b border-gray-200">Amount</th>
              <th className="px-4 py-2 border-b border-gray-200">
                Item description
              </th>
              <th className="px-4 py-2 border-b border-gray-200">Date sent</th>
              <th className="px-4 py-2 border-b border-gray-200">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.orderId}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.customerId}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.dropOffLocation}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.recipientName}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.recipientNo}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.weight}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.amount}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.itemDescription}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.dateSent}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventorys;
