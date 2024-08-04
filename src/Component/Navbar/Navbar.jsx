import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-3 py-2 bg-white rounded-full md:m-10 md:justify-between">
      <Link to='/'>
        <div className="bg-[#FE9F11] h-[55px] w-[65px] rounded-full flex items-center justify-center">
          <img src="/assets/Images/logo.png" alt="logo" className="flex" style={{ width: "100px" }} />
        </div>
      </Link>

      <div className="md:hidden">
        <button
          className="text-[#FE9F11] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <div className={`items-center justify-between w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav>
          <ul className="flex flex-col mt-4 space-y-2 md:flex-row md:space-y-0 md:space-x-10 md:mt-0">
            <li>
              <NavLink to="/services" className="font-bold transition-all hover:underline hover:text-slate-900"> Services </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="font-bold transition-all hover:underline hover:text-slate-900"> About Us </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="font-bold transition-all hover:underline hover:text-slate-900"> Contact Us </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="font-bold transition-all hover:underline hover:text-slate-900"> FAQs </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
