import { useState } from 'react';
import CustomerTable from './CustomerTable';
import AddCustomerForm from './AddCustomerForm';
import { Routes, Route } from 'react-router-dom';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  return (
    <div>
      <Routes>
        <Route path="/admin/customer" element={<CustomerTable customers={customers} />} />
        <Route path="/admin/customer/add" element={<AddCustomerForm addCustomer={addCustomer} />} />
      </Routes>
    </div>
  );
};

export default CustomerManagement;
