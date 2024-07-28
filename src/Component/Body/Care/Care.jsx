import React from "react";
import customerCareImage from "../../../assets/Images/customerCareImage.png"; // Update with your image path
import customerBg from "../../../assets/Images/customerbg.png"; // Update with your image path

const Care = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[600px]">
      <img src={customerBg} alt="Background" className="object-cover w-full h-full" />
      <div className="absolute top-0 left-0 flex flex-col items-center justify-between w-full h-full p-8 bg-black bg-opacity-50 md:flex-row md:p-16">
        <div className="max-w-lg mb-8 text-center md:text-left md:mb-0">
          <h2 className="mb-6 text-2xl font-bold text-yellow-300 md:text-3xl">
            Need a customer care assistance?
          </h2>
          <p className="mb-4 text-lg text-white md:text-xl">We are here.</p>
          <p className="mb-6 text-lg text-white md:text-xl">
            Our Online customer support is available always to attend to every
            concern you may have.
          </p>
          <p className="text-2xl font-semibold text-yellow-300 md:text-3xl">
            Call +45 50 16 95 37
          </p>
        </div>
        <div className="hidden w-full md:w-auto lg:block">
          <img
            src={customerCareImage}
            alt="Customer Care"
            className="rounded-lg w-full md:w-[600px] h-64 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Care;
