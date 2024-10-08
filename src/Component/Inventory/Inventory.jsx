import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Inventorys = () => {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [customerCount, setCustomerCount] = useState(0);
  const { searchTerm } = useOutletContext();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://e4-global-backend.onrender.com/api/v1/shipment/all"
        );
        let fetchedOrders = Array.isArray(response.data.data.shipments)
          ? response.data.data.shipments
          : [];
        fetchedOrders = fetchedOrders.reverse(); // Reverse the fetched orders array
        setOrders(fetchedOrders);

        const customersResponse = await axios.get(
          "https://e4-global-backend.onrender.com/api/v1/customer/"
        );
        const fetchedCustomers = customersResponse.data.data;
        setCustomers(fetchedCustomers);

        setCustomerCount(customersResponse.data.data.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders or customers:", error);
        setError("Failed to fetch orders or customers");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    if (!["pending", "delivery", "intransit"].includes(newStatus)) {
      alert("Invalid status value");
      return;
    }

    try {
      await axios.put(
        `https://e4-global-backend.onrender.com/api/v1/shipment/${orderId}`,
        { status: newStatus }
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const getPhoneNumber = (customerId) => {
    const customer = customers.find((c) => c.customerId === customerId);
    return customer ? customer.phoneNumber.toString() : "";
  };

  const filteredOrders = orders.filter((order) => {
    const phoneNumber = getPhoneNumber(order.customerId);
    return (
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.dropLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phoneNumber.includes(searchTerm)
    );
  });

  return (
    <div className="p-4">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Loading...</div>
        </div>
      )}
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
                {orders.filter((order) => order.status === "intransit").length}
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
                {customerCount}
              </p>
            </div>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200">Order ID</th>
                  <th className="px-4 py-2 border-b border-gray-200">Customer ID</th>
                  <th className="px-4 py-2 border-b border-gray-200">Drop off location</th>
                  <th className="px-4 py-2 border-b border-gray-200">Recipient Name</th>
                  <th className="px-4 py-2 border-b border-gray-200">Recipient No.</th>
                  <th className="px-4 py-2 border-b border-gray-200">Weight</th>
                  <th className="px-4 py-2 border-b border-gray-200">Amount</th>
                  <th className="px-4 py-2 border-b border-gray-200">Item description</th>
                  <th className="px-4 py-2 border-b border-gray-200">Date sent</th>
                  <th className="px-4 py-2 border-b border-gray-200">Status</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredOrders.map((order) => (
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
                      {getPhoneNumber(order.customerId)}
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
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                        className="px-2 py-1 border border-gray-300 rounded"
                      >
                        <option value="pending">Pending</option>
                        <option value="delivery">Delivery</option>
                        <option value="intransit">In Transit</option>
                      </select>
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
