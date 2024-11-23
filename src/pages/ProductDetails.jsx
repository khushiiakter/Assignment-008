import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToCart, addWish, getAllWish } from "../utils";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const singleData = data.find((product) => product.product_id == id);
    setProduct(singleData);
    const wishlists = getAllWish();
    const isWishExist = wishlists.find(
      (item) => item.product_id == singleData.product_id
    );
    if (isWishExist) {
      setIsFavorite(true);
    }
  }, [data, id]);
  const {
    rating,
    availability,
    specification,
    description,
    price,
    product_image,
    product_title,
  } = product;
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleAddWish = (product) => {
    addWish(product);
    setIsFavorite(true);
  };

  return (
    <div className="">
        <Helmet>
          <title>GadgetHeaven - ProductDetails</title>
        </Helmet>
      <div className="bg-[#9538E2] mb-[400px]">
        {/* banner section */}
        <div className="hero container mx-auto">
          <div className="hero-content text-center  relative">
            <div className="max-w-xl text-white">
              <h1 className="text-3xl  font-bold">Product Details</h1>
              <p className="pt-4 pb-52 text-base font-normal">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
            {/* details section */}
            <div className="absolute rounded-3xl top-[172px] gap-8 flex justify-between w-[900px]  bg-base-100 shadow-xl p-8">
              <figure className=" h-[450px] w-[425px]">
                <img
                  className="w-full object-cover h-full rounded-2xl"
                  src={product_image}
                  alt="Album"
                />
              </figure>
              <div className="flex flex-col items-start justify-between text-left">
                <h2 className="font-semibold text-3xl text-[#09080F] ">{product_title}</h2>
                <p className="text-xl text-[#09080FCC] font-semibold">Price: $ {price}</p>
                {
                  availability ? <div className="badge  badge-outline text-[#309C08] text-sm font-medium py-2 px-4">In Stock</div> : <div className="badge text-[#309C08] text-sm font-medium py-2 px-4 badge-outline">Out of stock</div>
                }
                <p className="text-[#09080F99] text-sm">{description}</p>
                <p className="text-lg font-bold text-[#09080F]">
                  Specification:
                </p>
                <ul className="text-base text-[#09080F99] ml-5">
                  {specification &&
                    specification.map((i, index) => (
                      <li key={index} className="list-decimal">
                        {i}
                      </li>
                    ))}
                </ul>
                <p className="text-lg font-bold text-[#09080F]">Rating</p>
                <div className="flex ">
                  <div>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-200 "
                      />
                    </div>
                  </div>

                  <div className="badge badge-ghost ml-4">{rating}</div>
                </div>
                <div className=" flex justify-start  gap-4">
                  <Link
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#9538E2]  rounded-full py-3 px-5 text-lg font-bold text-white text-[#09080F99] flex items-center gap-3"
                  >
                    Add To Card <BsCart3 />
                  </Link>

                  <button
                    disabled={isFavorite}
                    onClick={() => handleAddWish(product)}
                    className="border text-xl  p-3.5 rounded-full"
                  >
                    <IoMdHeartEmpty />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
