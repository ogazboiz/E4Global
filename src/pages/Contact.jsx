import hannns from "../assets/Images/contact.png";

function Contact() {
  return (
    <div className="relative  p-8 mx-auto my-8 bg-gradient-to-b from-[#C07A1033] to-[#C07A1033] rounded-lg lg:h-[700px]">
      <img src={hannns} alt="Vision" className="w-full h-auto max-h-[400px] object-cover md:absolute lg:w-[900px]" />
      <div className="relative md:top-[250px] p-6 bg-white mx-auto mt-8 md:mt-0 md:ml-[70%] md:transform md:-translate-x-1/2 rounded-br-3xl rounded-tr-3xl rounded-bl-3xl shadow-md w-full md:w-[700px]">
        <h2 className="mb-4 text-2xl font-bold text-orange-500">Contact Us</h2>
        <div className="font-semibold text-gray-800">
          <ul>
            <li>Email: info@e4glogistics.com</li>
            <li>CEO Email: akanjiedris@e4glogistics.com</li>
            <li>Phone: + 237 678029764</li>
            <li>Note: Please can you as well make a contact form where the customer can go to the site, enter their details, write their enquiries, and get a response.</li>
            <li>
              CEO STATEMENT <br />
              We remain steadfast in providing affordable, fast, and reliable logistics services.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
