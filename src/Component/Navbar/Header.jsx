import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-400 pt-4 ">
      <div className="bg-white p-6 flex items-center shadow-md">
        <div className="container mx-auto flex items-center pl-16" >
          <div className="flex items-center">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">E4 GLOBAL</span>
            </div>
            <div className="flex items-center ml-16">
              <div className="w-8 h-8 flex items-center justify-center rounded">
              <span className="material-icons text-5xl">dashboard</span>
              </div>
              <h1 className="text-3xl font-bold text-orange-500 ml-6">Dashboard</h1>
            </div>
          </div>
          <div className="ml-24  relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 material-icons">search</span>
            <input
              type="text"
              placeholder="search"
              className="pl-10  w-[694px] h-[62px] pr-4 py-2 rounded-full bg-gray-200 text-gray-800"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
