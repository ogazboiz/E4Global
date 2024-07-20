import { useState } from "react";
import OrderForm from "../Component/Customer/Invoice/Order/OrderForm";
import Invoice from "../Component/Customer/Invoice/Invoices/Invoice";

const Order = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  return (
    <div className="p-4 space-y-4">
      <OrderForm setInvoiceData={setInvoiceData} />
      <Invoice data={invoiceData} />
    </div>
  );
};

export default Order;
