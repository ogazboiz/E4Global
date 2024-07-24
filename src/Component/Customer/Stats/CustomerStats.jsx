import PropTypes from 'prop-types';

const CustomerStats = ({ totalCustomers, activeCustomers, inactiveCustomers }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="p-6 text-center bg-white rounded-lg shadow">
        <h2 className="text-lg text-gray-600">Total number of customers</h2>
        <p className="text-3xl font-bold text-orange-500">{totalCustomers}</p>
      </div>
      <div className="p-6 text-center bg-white rounded-lg shadow">
        <h2 className="text-lg text-gray-600">Active customers</h2>
        <p className="text-3xl font-bold text-orange-500">{activeCustomers}</p>
      </div>
      <div className="p-6 text-center bg-white rounded-lg shadow">
        <h2 className="text-lg text-gray-600">Inactive customers</h2>
        <p className="text-3xl font-bold text-orange-500">{inactiveCustomers}</p>
      </div>
    </div>
  );
};

CustomerStats.propTypes = {
  totalCustomers: PropTypes.number.isRequired,
  activeCustomers: PropTypes.number.isRequired,
  inactiveCustomers: PropTypes.number.isRequired,
};

export default CustomerStats;
