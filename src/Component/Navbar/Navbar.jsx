import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, text: "Services", link: "/services" },
    { id: 2, text: "About Us", link: "/about" },
    { id: 3, text: "Contact Us", link: "/contact" },
    { id: 4, text: "FAQs", link: "/faq" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full py-2 bg-white shadow-md lg:py-4">
      <div className="container flex items-center justify-between px-4 mx-auto md:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-[#FE9F11] h-[55px] w-[55px] rounded-full flex items-center justify-center">
            <img
              src="/assets/Images/logo.png"
              alt="logo"
              className="w-auto h-10"
            />
          </div>
         
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-[#FE9F11] focus:outline-none"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="w-8 h-8" />
            ) : (
              <AiOutlineMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 right-0 w-3/4 bg-white rounded-lg shadow-lg md:relative md:top-0 md:flex md:w-auto md:bg-transparent md:shadow-none md:rounded-none`}
        >
          <ul className="flex flex-col p-4 mt-4 space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:mt-0 md:p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className="block font-bold transition-all text-[#48758E] hover:underline hover:text-slate-900 md:text-base"
                  onClick={toggleMenu}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
