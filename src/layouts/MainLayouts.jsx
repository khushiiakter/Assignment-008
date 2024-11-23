import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MainLayouts = () => {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  useEffect(() => {
    switch (true) {
      case location.pathname === "/":
        setBackgroundColor("#9538E2");

        break;
      case location.pathname.startsWith("/category/"):
        setBackgroundColor("#9538E2");
        break;

      // case "/dashboard":
      //     return <DashboardHeader></DashboardHeader>;
      default:
        setBackgroundColor("#FFFFFF");
    }
  }, [location.pathname]);
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>GadgetHeaven</title>
        </Helmet>
        {/* navbar */}

        <div className=" mx-5">
          <Navbar backgroundColor={backgroundColor}></Navbar>
        </div>

        {/* dynamic section */}
        <div className=" bg-[#F7F7F7]">
          <Outlet></Outlet>
        </div>
        {/* footer */}
       
        <Footer></Footer>
        <Toaster />
      </div>
    </HelmetProvider>
  );
};

export default MainLayouts;
