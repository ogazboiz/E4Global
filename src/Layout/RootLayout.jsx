import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

function RootLayout() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/adminlogin';

  return (
    <div>
      {!hideNavbarAndFooter && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default RootLayout;
