
import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  
  return (
    <div>
        <Helmet>
          <title>GadgetHeaven - Dashboard</title>
        </Helmet>
      <div className="hero py-4 bg-[#9538E2] ">
        <div className="hero-content text-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl  font-bold">Dashboard</h1>
            <p className="pt-4 pb-8 text-base font-normal">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex justify-center gap-6">
              <NavLink to ='/dashboard/cart'
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? ' text-[#973ae2] bg-white rounded-full py-3 px-16 text-lg font-bold  flex items-center gap-3 border border-white '
                      : 'bg-[#9538E2] text-white rounded-full py-3 px-16 text-lg font-bold   flex items-center gap-3 border border-white ' }`
                }
              >
                Cart
              </NavLink>
              <NavLink to = "/dashboard/wishlists" className={({ isActive }) =>
                  `  ${
                    isActive ? ' text-[#9741dd] bg-white rounded-full py-3 px-14 text-lg font-bold  flex items-center gap-3 border border-white  '
                      : 'bg-[#9538E2] text-white rounded-full py-3 px-14 text-lg font-bold   flex items-center gap-3 border border-white '
                  }`
                }
              >
                Wishlist
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* add to section */}
      <div  className="w-10/12 mx-auto flex flex-col gap-6 min-h-screen">
        <Outlet ></Outlet>
      </div>
      {/* <CartProducts  products={products} ></CartProducts> */}
      {/* <div className="container mx-auto flex flex-col gap-6">
        {products.map((product) => (
          <CartProduct key={product.product_id} product={product}></CartProduct>
        ))}
      </div> */}
    </div>
  );
};

export default Dashboard;
