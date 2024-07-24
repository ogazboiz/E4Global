import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="flex">
      <div className="flex-1">
        <main className="p-10">
          <div className="container mx-auto">
            <h2 className="mb-4 text-xl font-bold">
            Welcome to the Admin Dashboard, {user.name}
            </h2>
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              <div className="p-4 bg-white rounded shadow-md">
                <div className="text-3xl font-bold">120</div>
                <div>Customers</div>
              </div>
              <div className="p-4 bg-white rounded shadow-md">
                <div className="text-3xl font-bold">120</div>
                <div>Orders</div>
              </div>
              <div className="p-4 bg-white rounded shadow-md">
                <div className="text-3xl font-bold">120</div>
                <div>Inventory</div>
              </div>
            </div>
            <div className="p-4 mb-6 bg-white rounded shadow-md">
              <h3 className="mb-4 text-lg font-semibold">
                Transaction History
              </h3>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-2 border-b">Order ID</th>
                    <th className="p-2 border-b">Date</th>
                    <th className="p-2 border-b">Status</th>
                    <th className="p-2 border-b">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, i) => (
                    <tr key={i}>
                      <td className="p-2 border-b">255623</td>
                      <td className="p-2 border-b">12-02-24</td>
                      <td className="p-2 border-b">Delivered</td>
                      <td className="p-2 border-b">1,000</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Active Shipment</h3>
              <div className="flex items-center">
                <div className="w-1/2">
                  <div className="relative pt-1 pb-2">
                    <div className="flex h-2 mb-4 overflow-hidden text-xs bg-orange-200 rounded">
                      <div
                        style={{ width: "45%" }}
                        className="flex flex-col justify-center text-center text-white bg-orange-600 shadow-none whitespace-nowrap"
                      ></div>
                    </div>
                    <div className="flex h-2 mb-4 overflow-hidden text-xs bg-yellow-200 rounded">
                      <div
                        style={{ width: "65%" }}
                        className="flex flex-col justify-center text-center text-white bg-yellow-600 shadow-none whitespace-nowrap"
                      ></div>
                    </div>
                    <div className="flex h-2 overflow-hidden text-xs bg-gray-200 rounded">
                      <div
                        style={{ width: "10%" }}
                        className="flex flex-col justify-center text-center text-white bg-gray-600 shadow-none whitespace-nowrap"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 text-right">
                  <div className="text-3xl font-bold">120</div>
                  <div>
                    <span className="text-orange-600">Pending (45)</span> |{" "}
                    <span className="text-yellow-600">In delivery (65)</span> |{" "}
                    <span className="text-gray-600">In Transit (10)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
