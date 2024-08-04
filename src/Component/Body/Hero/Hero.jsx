import React from "react";
import "./hero.css";
import carText from "../../../assets/Images/bg.png";

function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-orange-400 to-red-500 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-xl mx-auto text-center sm:text-left">
          <h2 className="text-4xl font-bold text-white md:text-3xl lg:text-5xl">
            E4 Global Logistics
          </h2>
          <p className="text-white md:mt-4 md:block lg:text-2xl">
            Connecting the world one delivery at a time,
          </p>
          <p className="text-white md:block lg:text-2xl">
            one delivery at a time.
          </p>
        </div>
      </div>
      <img
        alt="logo"
        src={carText}
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
}

export default Hero;
