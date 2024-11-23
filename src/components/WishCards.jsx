import { useEffect, useState } from "react";
import { getAllWish } from "../utils";
import WishProduct from "./WishProduct";
import { Helmet } from "react-helmet-async";

const WishCards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const wishlists = getAllWish();
    setProducts(wishlists);
  }, []);
  return (
    <>
        <Helmet>
          <title>GadgetHeaven - Wishlist</title>
        </Helmet>
        <h3 className="text-3xl font-bold text-center mt-8">Wishlist</h3> 
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <WishProduct key={product.product_id} product={product}></WishProduct>
        ))}
      </div>
    </>
  );
};

export default WishCards;
