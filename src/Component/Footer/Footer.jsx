import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/Images/footer.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FE9F11] opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col mt-16 lg:flex-row lg:justify-between lg:items-center">
          {/* Centered Content */}
          <div>
            
          </div>
          <div className="flex flex-col items-center flex-1 lg:items-start">
            <div className="mb-8 text-center lg:text-left lg:mb-0">
          
              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1 lg:items-start">
            <div className="mb-8 text-center lg:text-left lg:mb-0">
            
              <ul className="mt-6 space-y-1">
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

          <div className="flex flex-col items-center flex-1 lg:items-start">
            <div className="mb-8 text-center lg:text-left lg:mb-0">
              <strong className="font-medium text-white">Follow Our Socials:</strong>
              <ul className="flex gap-6 mt-6 space-y-1">
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    <FaFacebook className="text-4xl text-blue-500" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    <FaInstagram className="text-4xl text-blue-500" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    <FaTwitter className="text-4xl text-blue-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-16 border-t border-gray-100">
          <p className="text-center text-gray-300 text-xs/relaxed">
            © Company 2024. All rights reserved.
            <br />
            Created with
            <a
              href="#"
              className="text-white underline transition hover:text-gray-200"
            >
              Laravel
            </a>
            and
            <a
              href="#"
              className="text-white underline transition hover:text-gray-200"
            >
              Laravel Livewire
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
