import hannns from '../assets/Images/hands.png'

const About = () => {
  return (
    <div className="pt-10">
    <div className="p-8 mx-auto my-8 bg-gradient-to-b from-[#C07A1033] to-[#C07A1033] rounded-lg">
      <div className="w-full p-6  bg-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl shadow-md lg:w-[900px]">
        <h2 className="mb-4 text-2xl font-bold text-orange-500">Our Vision</h2>
        <p className="mb-4 text-gray-700">
          Logistics forms the brain behind all of global trades and as well
          plays a major role in all aspects of our everyday lives. With this in
          mind, our ambition is to make E4 Global Logistics an undisputed,
          Reliable and a world leading point of reference in the logistics
          industry. By doing what we do best, we enable businesses to grow and
          communities to thrive. Customers needs and strategic ambition are our
          by consistently delivering exceptional end-to-end supply chain
          solutions that answer even their most complex needsUtmost Priority. In
          an increasingly unpredictable and paradoxical world, we create value
          for our customers.
        </p>
      </div>
        <img src={hannns} alt="Vision" className="lg:ml-[260px] " />
      <div className="p-6 bg-white lg:ml-[260px] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl shadow-md lg:w-[900px]">
        <h2 className="mb-4 text-2xl font-bold text-orange-500">Our Mission</h2>
        <p className="text-gray-700">
          E4 Global Logistics being a 3PL, we understand that the best-fit
          solutions for ever-evolving supply chains are one of the key enablers
          to the success of our customers business. Standing on a wealth of
          international expertise, local know-how and with a forward thinking
          attitude, we lay much emphasis on attention to creating strong,
          long-term partnerships with our customers. We stand behind our
          customers. We support them to meet their supply chain challenges
          head-on and help them to identify growth opportunities. We look at
          improving in our services there meeting our customers evolving supply
          chain needs and seamlessly design logistics solutions that best fit
          their needs.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
