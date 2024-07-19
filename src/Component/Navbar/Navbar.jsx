import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="items-center px-3 py-2 bg-white rounded-full md:m-10 md:flex md:justify-between">
     <Link to='/'>
        <div className="bg-[#FE9F11] h-[55px] w-[65px] rounded-full flex items-center justify-center">
          <img src="/assets/Images/logo.png" alt="logo" className="flex" style={{ width: "100px" }}/>
        </div>
      </Link>

  <div className="items-center justify-between hidden w-3/5 md:flex">
    <nav>
      <ul className="flex space-x-10 justify-starts">
        <li>
          <NavLink to="/" className="font-bold transition-all hover:underline hover:text-slate-900 hover:"> Services </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="font-bold transition-all hover:underline hover:text-slate-400 hover:">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services" className="font-bold transition-all hover:underline hover:text-slate-400 hover:">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/product" className="font-bold transition-all hover:underline hover:text-slate-400 hover:">FAQs</NavLink>
        </li>
      </ul>
    </nav>
   
  </div>
</header>

  );
}

export default Navbar;
