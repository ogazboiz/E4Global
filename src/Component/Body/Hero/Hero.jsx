import "./hero.css";
import car from "../../../assets/Images/car.png";
import carText from "../../../assets/Images/logo1.png";
function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 min-h-[562px] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex items-center ">
          <div className="pl-5">
            <h1 className="mb-4 text-6xl font-bold text-white">
              E4 Global Logistics
            </h1>
            <p className="text-3xl font-bold text-white">
              Connecting the world
            </p>
            <p className="text-3xl font-bold text-white">
              one delivery at a time.
            </p>
          </div>
          <div>
            <img src={carText} alt="logo" className="car-logo-text" />
            <img src={car} alt="Delivery Van" className="ml-10 car-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
