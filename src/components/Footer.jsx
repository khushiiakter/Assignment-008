const Footer = () => {
  return (
   
    <div className="bg-white py-14 ">
      <div className="container mx-auto text-center flex flex-col justify-between items-center">
        <footer className="   text-base-content border-base-300  px-10 py-4">
          
            <div className="flex flex-col items-center justify-center gap-3">
                <h3 className="text-3xl font-bold text-[#09080F]">Gadget Heaven</h3>
                <p className="font-medium text-[#09080F99]">Leading the way in cutting-edge technology and innovation.</p>
            </div>
          
        </footer>
        <hr className="w-full mt-4" />

        <footer className="footer  text-base-content p-10 justify-items-center	 ">
          <nav className="place-items-center">
            <h6 className="footer-title text-lg opacity-100	 font-bold text-[#09080F]">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery
            </a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav className="place-items-center">
            <h6 className="footer-title opacity-100	 text-lg font-bold text-[#09080F]">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            
          </nav>
          <nav className="place-items-center">
            <h6 className="footer-title opacity-100	 text-lg font-bold text-[#09080F]">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
