import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";

import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="px-5">
        <Helmet>
          <title>GadgetHeaven - Home</title>
        </Helmet>
      {/* banner */}
      <Banner></Banner>
      {/* category tab section */}
      <h3 className="text-4xl mt-[300px] font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="flex  mt-12 container mx-auto ">
        <div >
          <Categories categories={categories}></Categories>
        </div>
        
        <div className=" ml-6 mb-14">
          <Outlet></Outlet>

        </div>
       
        
      </div>
    </div>
  );
};

export default Home;
