
import CustomerStats from "../Component/Customer/Stats/CustomerStats";
import CustomerTable from "../Component/Customer/Table/CustomerTable";


function Customer({ customers }) {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <CustomerStats />
      <CustomerTable customers={customers} />
      
    </div>
  );
}

export default Customer;
