// CustomerTable.js


const CustomerTable = () => {
  const customers = [
    { name: 'Kate Holt', email: 'kateholt@gmail.com', phone: '081111111111', id: '9292' },
    { name: 'Kate Holt', email: 'kateholt@gmail.com', phone: '081111111111', id: '9292' },
    { name: 'Kate Holt', email: 'kateholt@gmail.com', phone: '081111111111', id: '9292' },
    { name: 'Kate Holt', email: 'kateholt@gmail.com', phone: '081111111111', id: '9292' },
    // Add more customer objects here
  ];

  return (
    <div className="p-4">
      <button className="px-4 py-2 mb-4 text-white bg-orange-500 rounded-full">Add customer</button>
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className='items-center gap'>
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">Name</th>
              <th className="px-4 py-2 border-b border-gray-200">Email</th>
              <th className="px-4 py-2 border-b border-gray-200">Phone number</th>
              <th className="px-4 py-2 border-b border-gray-200">Customer ID</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b border-gray-200">{customer.name}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.email}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.phone}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
