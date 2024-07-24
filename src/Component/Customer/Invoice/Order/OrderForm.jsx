import axios from "axios";
import { useState, useEffect } from "react";

const OrderForm = () => {
  const initialFormData = {
    customerId: "",
    recipientName: "",
    phoneNumber: "", // New field for phone number
    orderId: "", // This will be set dynamically
    dropLocation: "",
    shipmentDate: "",
    packagingType: "",
    totalWeight: "",
    declaredValue: "",

    status: "pending",
    orderDescription: {
      weight: "",
      quantity: "",
      descriptionOfContents: "",
      unitValue: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [customers, setCustomers] = useState([]);
  const [customerNotFound, setCustomerNotFound] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "https://e4-global-backend.onrender.com/api/v1/customer/"
        );
        setCustomers(response.data.data);
        console.log("Fetched customers:", response.data.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const updateCustomerDetails = () => {
      if (formData.customerId) {
        const customer = customers.find(
          (c) => c.customerId === formData.customerId
        );

        if (customer) {
          setFormData((prevData) => ({
            ...prevData,
            recipientName: customer.name,
            phoneNumber: customer.phoneNumber, // Update phone number
          }));
          setCustomerNotFound(false);
        } else {
          setFormData((prevData) => ({
            ...prevData,
            recipientName: "",
            phoneNumber: "", // Clear phone number if customer not found
          }));
          setCustomerNotFound(true);
        }
      } else {
        setFormData((prevData) => ({
          ...prevData,
          recipientName: "",
          phoneNumber: "", // Clear phone number if no customerId
        }));
        setCustomerNotFound(false);
      }
    };

    updateCustomerDetails();
  }, [formData.customerId, customers]);

  const generateOrderId = () => {
    const prefix = "ORD";
    const uniqueNumber = Math.floor(100000 + Math.random() * 900000); // Generates a number between 100000 and 999999
    return `${prefix}${uniqueNumber}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in formData.orderDescription) {
      setFormData((prevData) => ({
        ...prevData,
        orderDescription: {
          ...prevData.orderDescription,
          [name]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setSuccess("");

    // Check if customerId exists in the customer list
    const customerExists = customers.some(
      (customer) => customer.customerId === formData.customerId
    );

    if (!customerExists) {
      setError("Customer ID not found.");
      return;
    }

    // Generate a unique orderId
    const orderId = generateOrderId();

    // Update formData state to include the generated orderId
    setFormData((prevData) => ({
      ...prevData,
      orderId: orderId,
    }));

    try {
      // Wait until formData is updated with the new orderId
      const response = await axios.post(
        "https://e4-global-backend.onrender.com/api/v1/shipment/",
        { ...formData, orderId }
      );

      console.log("Response:", response.data);
      setSuccess("Order created successfully!");

      // Reset form data except for the orderId
      setFormData({
        ...initialFormData,
        orderId: orderId, // Keep the generated orderId
      });
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Error Creating Order");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-orange-500">
          Create Order
        </h1>
        {success && (
          <div className="mb-4 text-center text-green-600">{success}</div>
        )}
        {error && <div className="mb-4 text-center text-red-600">{error}</div>}
        {customerNotFound && (
          <div className="mb-4 text-center text-red-600">
            Customer ID not found.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="customerId"
                >
                  Customer ID
                </label>
                <input
                  type="text"
                  id="customerId"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="recipientName"
                >
                  Recipient Name
                </label>
                <input
                  type="text"
                  id="recipientName"
                  name="recipientName"
                  value={formData.recipientName}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="orderId"
                >
                  Order ID
                </label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  value={formData.orderId}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="dropLocation"
                >
                  Drop Location
                </label>
                <input
                  type="text"
                  id="dropLocation"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="shipmentDate"
                >
                  Shipment Date
                </label>
                <input
                  type="datetime-local"
                  id="shipmentDate"
                  name="shipmentDate"
                  value={formData.shipmentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="packagingType"
                >
                  Packaging Type
                </label>
                <input
                  type="text"
                  id="packagingType"
                  name="packagingType"
                  value={formData.packagingType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="totalWeight"
                >
                  Weight
                </label>
                <input
                  type="number"
                  id="totalWeight"
                  name="totalWeight"
                  value={formData.totalWeight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="declaredValue"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="declaredValue"
                  name="declaredValue"
                  value={formData.declaredValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.orderDescription.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="descriptionOfContents"
                >
                  Description of Contents
                </label>
                <input
                  type="text"
                  id="descriptionOfContents"
                  name="descriptionOfContents"
                  value={formData.orderDescription.descriptionOfContents}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="unitValue"
                >
                  Unit Value
                </label>
                <input
                  type="number"
                  id="unitValue"
                  name="unitValue"
                  value={formData.orderDescription.unitValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
