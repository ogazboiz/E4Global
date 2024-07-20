// CustomerStats.js


const CustomerStats = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="p-6 text-center bg-white rounded-lg shadow">
        <h2 className="text-lg text-gray-600">Total number of customers</h2>
        <p className="text-3xl font-bold text-orange-500">120</p>
      </div>
      <div className="p-6 text-center bg-white rounded-lg shadow">
        <h2 className="text-lg text-gray-600">Active customers</h2>
        <p className="text-3xl font-bold text-orange-500">120</p>
      </div>
      <div className="p-6 text-center bg-white rounded-lg shadow">
        <h2 className="text-lg text-gray-600">Inactive customers</h2>
        <p className="text-3xl font-bold text-orange-500">120</p>
      </div>
    </div>
  );
};

export default CustomerStats;
