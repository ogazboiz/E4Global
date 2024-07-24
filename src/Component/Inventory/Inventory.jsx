import axios from "axios";
import { useEffect, useState } from "react";

const Inventorys = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://e4-global-backend.onrender.com/api/v1/shipment/all"
        );
        setOrders(response.data.data); // Access the 'data' array from the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="p-4 text-center bg-white rounded shadow">
              <p className="text-gray-600">Total number of orders</p>
              <p className="text-2xl font-bold text-orange-500">
                {orders.length}
              </p>
            </div>
            <div className="p-4 text-center bg-white rounded shadow">
              <p className="text-gray-600">Active orders</p>
              <p className="text-2xl font-bold text-orange-500">
                {orders.filter((order) => order.status === "Active").length}
              </p>
            </div>
            <div className="p-4 text-center bg-white rounded shadow">
              <p className="text-gray-600">Pending orders</p>
              <p className="text-2xl font-bold text-orange-500">
                {orders.filter((order) => order.status === "pending").length}
              </p>
            </div>
            <div className="p-4 text-center bg-white rounded shadow">
              <p className="text-gray-600">Total number of customers</p>
              <p className="text-2xl font-bold text-orange-500">
                {/* Replace with actual customer count */}
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200">
                    Order ID
                  </th>
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
                  <th className="px-4 py-2 border-b border-gray-200">
                    Date sent
                  </th>
                  <th className="px-4 py-2 border-b border-gray-200">Status</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {order.orderId}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {order.customerId}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {order.dropLocation}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {order.recipientName}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {/* Add recipientNo if available in data */}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {order.totalWeight}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {order.declaredValue}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {order.orderDescription.descriptionOfContents}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {new Date(order.shipmentDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Inventorys;
