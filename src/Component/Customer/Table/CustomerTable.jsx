import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomerTable = ({ customers }) => {
  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Link to="/admin/customer/add">
          <button className="px-4 py-2 text-white bg-orange-500 rounded-full">
            Add customer
          </button>
        </Link>
      </div>
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="items-center gap">
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">Name</th>
              <th className="px-4 py-2 border-b border-gray-200">Email</th>
              <th className="px-4 py-2 border-b border-gray-200">
                Phone number
              </th>
              <th className="px-4 py-2 border-b border-gray-200">
                Customer ID
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {customers.map((customer, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b border-gray-200">
                  {customer.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {customer.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {customer.phone}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {customer.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CustomerTable.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomerTable;
