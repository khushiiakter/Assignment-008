import { Helmet } from "react-helmet-async";

const Services = () => {
  return (

    <div className="pb-10">
        <Helmet>
          <title>GadgetHeaven - Services</title>
        </Helmet>
      <div className="hero py-4 bg-[#9538E2] mb-8">
        <div className="hero-content text-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl  font-bold">Terms of Service</h1>
            <p className="pt-4 w-2/3 mx-auto text-base font-normal">
              Welcome to GadgetHeaven! By accessing or using our platform, you
              agree to the following terms.
            </p>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto border-[5px] border-[#a352e652] rounded-2xl p-6 ">
        <ol className="ml-8 space-y-2">
          <li className="list-decimal text-xl font-bold ">Services</li>
          <p className="text-sm">
            GadgetHeaven offers a range of electronic gadgets for browsing and
            purchase. Users can add items to their cart, save items in their
            wishlist, view product specifications, and sort products by price.
          </p>
          <li className="list-decimal text-xl font-bold ">User Accounts</li>
          <p className="text-sm">
            You are responsible for providing accurate information and keeping
            your account secure. Notify us immediately if you suspect
            unauthorized access.
          </p>
          <li className="list-decimal text-xl font-bold ">
            Purchasing & Payments
          </li>
          <li className="list-disc ml-3">
            <span className="font-bold"> classPricing:</span> Prices are in USD
            and may change.
          </li>
          <li className="list-disc ml-3">
            <span className="font-bold">Payment:</span> We use third-party
            processors for payments. Completing a purchase means you agree to
            pay the listed price and any fees.
          </li>
          <li className="list-disc ml-3">
            Cart: Items in your cart aren't reserved until checkout.
          </li>

          <li className="list-decimal text-xl font-bold ">
            Shipping & Returns
          </li>
          <li className="list-disc ml-3">
            <span className="font-bold">Shipping:</span> Available within
            region. Times and rates are calculated at checkout.
          </li>
          <li className="list-disc ml-3">
            Returns: Return items in original condition within 14 days. Return
            shipping fees apply.
          </li>
          <li className="list-decimal text-xl font-bold ">Wishlist & Cart</li>
          <li className="list-disc ml-3">
            <span className="font-bold">Cart:</span> Add items to cart to view
            total at checkout.
          </li>
          <li className="list-disc ml-3">
            Wishlist: Save items for future viewing; duplicate entries are not
            allowed.
          </li>
          <li className="list-decimal text-xl font-bold ">
            Product Information
          </li>
          <p>
            Descriptions and ratings are provided for user convenience. We
            strive for accuracy but cannot guarantee all details.
          </p>
          <li className="list-decimal text-xl font-bold ">User Conduct</li>

          <p>
            Prohibited actions include posting false information, disrupting the
            Platform, and attempting unauthorized access.guarantee all details.
          </p>
          <li className="list-decimal text-xl font-bold ">
            Limitation of Liability
          </li>
          <p>
            GadgetHeaven is not liable for indirect damages related to your use
            of our platform.
          </p>

          <li className="list-decimal text-xl font-bold ">Changes to Terms</li>

          <p>
            We may update these Terms and will notify you of significant
            changes. Continued use indicates acceptance.
          </p>
          <li className="list-decimal text-xl font-bold ">Governing Law</li>
          <p>These Terms are governed by the laws of Jurisdiction.</p>
          <li className="list-decimal text-xl font-bold ">Contact Us</li>
          <p>For questions, reach us at support@gadgethaven.com .</p>
        </ol>
        <hr className="w-full mt-6" />
        <p className="text-center py-4">Thank you for choosing GadgetHeaven!</p>
      </div>
    </div>
  );
};

export default Services;
