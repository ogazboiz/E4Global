import "./hero.css";
import car from "../../../assets/Images/car.png";
import carText from "../../../assets/Images/logo1.png";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 min-h-[562px] flex items-center justify-center">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
          <div className="mb-6 lg:pl-5 lg:mb-0">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl">
              E4 Global Logistics
            </h1>
            <p className="text-xl font-bold text-white lg:text-3xl">
              Connecting the world
            </p>
            <p className="text-xl font-bold text-white lg:text-3xl">
              one delivery at a time.
            </p>
          </div>
          <div className="flex flex-col items-center hidden lg:flex-row lg:items-start lg:block">
            <img src={carText} alt="logo" className="mb-4 car-logo-text lg:mb-0 lg:mr-6" />
            <img src={car} alt="Delivery Van" className="ml-0 lg:ml-10 car-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
