import React from 'react';

const services = [
  {
    title: 'Flawless Delivery',
    description: 'Smooth and swift delivery process for users.',
    icon: '/assets/Images/flawlessDelivery.png', // Update with your icon path
  },
  {
    title: 'Custom Packaging',
    description: 'Custom packaging designed for product to make it fit perfectly.',
    icon: '/assets/Images/customPackaging.png', // Update with your icon path
  },
  {
    title: 'Order Tracking',
    description: 'Allow customers to monitor the delivery process.',
    icon: '/assets/Images/orderTracking.png', // Update with your icon path
  },
];

const OurServices = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center max-w-sm p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-20 h-20 bg-[#C07A1033] rounded-full flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-16 h-16 p-2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            </div>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
