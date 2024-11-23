import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

// gird grid-cols-3 gap-6
const ProductCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredProducts = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    } else {
      setProducts(data);
    }
  }, [category, data]);
  return (
    <>
      {products.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      ) : (
        <h2 className="text-4xl text-center text-gray-400 mt-40 ml-40">There is no product in this category.</h2>
      )}
    </>
  );
};

export default ProductCards;
