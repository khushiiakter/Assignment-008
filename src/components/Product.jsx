import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price,product_id } = product || {};
  return (
    <div className="p-5 bg-white rounded-xl flex flex-col justify-between">
      <div className="h-[220px] border rounded-xl">
        <img
          className="w-full h-full object-cover rounded-xl "
          src={product_image}
          alt=""
        />
      </div>

      <h3 className="mt-6 mb-3 text-2xl font-semibold text-[#09080F]">
        {product_title}
      </h3>
      <p className="text-[#09080F99]  mb-4 font-medium text-xl">
        Price: $ {price}
      </p>
      <div>
        <Link to = {`/product/${product_id}`} className=" rounded-full text-lg font-semibold text-[#9538E2] px-5 py-3 border-2 border-[#9538E2] ">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
