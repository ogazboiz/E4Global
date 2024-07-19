import React from 'react'
import './hero.css'
import car from "../../../assets/Images/car.png"
import carText from "../../../assets/Images/logo1.png"
function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 min-h-[562px] flex items-center justify-center">
      <div className="container mx-auto text-center">
        <div className=" p-10 rounded-lg flex items-center">
          <div className="text-center ml-40">
            <h1 className="text-6xl text-white font-bold mb-4">E4 Global Logistics</h1>
            <p className="text-3xl text-white font-bold">Connecting the world</p>
              <p className="text-3xl text-white font-bold">one delivery at a time.</p>
          </div>
          <div>
          <img src={carText} alt="logo" className="car-logo-text"/>
          <img
            src={car}
            alt="Delivery Van"
            className="ml-10 car-logo"
          />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero