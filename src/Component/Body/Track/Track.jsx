function Track() {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-8">
        <h1
          className="text-[#FE9F11]"
          style={{
            fontFamily: "inter",
            fontWeight: "500",
            fontSize: "32px",
          }}
        >
          Track Your Packages
        </h1>
      </div>
      <p className="text-center">
        Input your tracking ID to enable you check the status of your parcel
      </p>

      <div className="flex items-center w-full max-w-screen-lg p-6 mb-11">
        <label
          htmlFor="Username"
          className="relative flex-grow block h-20 border border-gray-400 rounded-s-lg shadow-sm focus-within:border-[#93AE5B] focus-within:ring-1 focus-within:ring-[#93AE5B]"
        >
          <input
            type="text"
            id="Username"
            className="w-full h-20 p-4 bg-[#d8d7d7] text-black border-none peer focus:border-transparent focus:outline-none focus:ring-0 input-placeholder-black" // Apply custom class
            placeholder="Input Tracking ID"
          />
        </label>
        <button
          type="submit"
          className="bg-[#93AE5B] h-[80px] w-44 rounded-e-xl"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Track;
