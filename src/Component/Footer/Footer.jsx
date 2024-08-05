import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/Images/footer.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FE9F11] opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-20">
        <div className="flex flex-col space-y-8 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-4 text-center lg:text-left lg:items-start">
            <div className="flex items-center gap-4 text-white">
              <MdOutlineMailOutline className="text-3xl" />
              <div className="text-base">
                <p>EMAIL: info@e4glogistics.com</p>
                <p>CEO Email: akannjiedris@e4glogistics.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <FaLocationDot className="text-3xl" />
              <p className="text-base">Douala, Cameroon</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-8 sm:mb-10 lg:flex-row lg:space-x-16 lg:space-y-0 ">
            <div className="text-center lg:text-left">
              <ul className="space-y-1">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-200"
                    to="/service"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-200"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-200"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-200"
                    to="/faq"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div></div>
            <div className="text-center lg:text-left sm:">
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center lg:text-left">
            <strong className="font-medium text-white">
              Follow Our Socials:
            </strong>
            <ul className="flex justify-center gap-6 mt-4 lg:justify-start">
              <li>
                <a className="transition hover:text-gray-200" href="#">
                  <FaFacebook className="text-3xl text-blue-500" />
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-200" href="#">
                  <FaInstagram className="text-3xl text-pink-500" />
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-200" href="#">
                  <FaTwitter className="text-3xl text-blue-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 ">
          <p className="text-center text-gray-300 text-xs/relaxed">
            © 2024 Copyright @ E4 global logistics | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
