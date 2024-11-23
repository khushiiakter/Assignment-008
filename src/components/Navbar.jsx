import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
const Navbar = ({backgroundColor}) => {
  return (
    <div className="container mt-4 mx-auto rounded-t-[32px]" style={{backgroundColor}}>
      <div className="navbar  px-8 ">
        <div className="navbar-start " >
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            
          </div>
          <NavLink to= "/" className=" text-xl">Gadget Heaven</NavLink>
        </div>
        <div className="navbar-center  hidden lg:flex" >
          <ul className="menu menu-horizontal px-1">
           
            <li>
              <NavLink to ='/' >Home</NavLink>
            </li>
            
            <li>
              <NavLink to ='/statistics'>Statistics</NavLink>
            </li>
            <li>
              <NavLink to = '/dashboard'>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to = '/services'>Services</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to ='/dashboard/cart' className=" border mr-4 bg-white p-2.5 text-xl rounded-full"><BsCart3 /></NavLink>
          <NavLink to ='/dashboard/wishlists' className="border  text-xl bg-white p-2.5 rounded-full"><IoMdHeartEmpty /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
