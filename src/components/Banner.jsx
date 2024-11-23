import { Link, NavLink } from 'react-router-dom';
import banner from '../assets/banner.jpg'
const Banner = () => {
  return (
    <div className=''>
      <div className="bg-[#9538E2] container mx-auto rounded-b-[32px]">
        {/* banner section */}
        <div className="hero  ">
          <div className="hero-content text-center">
            <div className="max-w-5xl text-center mb-52">
              <h1 className="text-5xl font-bold leading-[70px] text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
              <p className="py-4 max-w-[796px] mx-auto mb-4 text-white">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
              </p>
              <NavLink to = '/dashboard' className=" px-8 py-4 text-xl font-bold rounded-full border border-white bg-white text-[#9538E2] hover:text-white hover:bg-[#9538E2] ">Shop Now</NavLink>
            </div>
          </div>
        </div>
        {/* banner glass section */}
        <div className='absolute container top-[400px]'>
          <div className='w-8/12 h-[450px] mx-auto p-6 border border-white rounded-3xl'>
            <img src={banner} alt="" className='w-full h-full rounded-3xl object-cover'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
