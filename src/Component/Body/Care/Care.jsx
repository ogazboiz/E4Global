import React from "react";
import customerCareImage from "../../../assets/Images/customerCareImage.png"; // Update with your image path
import customerBg from "../../../assets/Images/customerbg.png"; // Update with your image path

const Care = () => {
  return (
    <section className="relative w-full h-[400px]">
      <img src={customerBg} alt="Background" className="object-cover w-full h-full" />
      <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full p-16 bg-black bg-opacity-50">
        <div className="max-w-lg text-left">
          <h2 className="mb-6 text-3xl font-bold text-yellow-300">
            Need a customer care assistance?
          </h2>
          <p className="mb-4 text-xl text-white">We are here.</p>
          <p className="mb-6 text-xl text-white">
            Our Online customer support is available always to attend to every
            concern you may have.
          </p>
          <p className="text-3xl font-semibold text-yellow-300">
            Call +45 50 16 95 37
          </p>
        </div>
        <div>
          <img
            src={customerCareImage}
            alt="Customer Care"
            className="rounded-lg w-[600px] h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Care;
