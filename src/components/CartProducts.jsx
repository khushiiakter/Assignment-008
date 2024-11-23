import { useEffect, useState } from "react";
import { getAllCartFavorites } from "../utils";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import right from "../assets/Group.png"
import { Helmet } from "react-helmet-async";
const CartProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const[showModal, setShoModal]=useState();

  useEffect(() => {
    const cartFavorites = getAllCartFavorites();
    setProducts(cartFavorites);
    const total = cartFavorites.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, []);
 
  
  const handleSortByPrice = () => {
    const sortedItems = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedItems);
  };
  const handlePurchase = () => {
    
    setProducts([]);
    localStorage.setItem("cartFavorites", JSON.stringify([]));
    setShoModal(true);
    

    
  };
  
  const handleCloseModal = () => {
    setTotal(0)
    setShoModal(false);
   
    navigate("/");
   
  };
  
  
  return (
    <>
        <Helmet>
          <title>GadgetHeaven - Cart</title>
        </Helmet>
      <div className="flex items-center mt-10 justify-between">
        <h3 className="text-3xl font-bold">Cart</h3>
        <div className="flex gap-4 items-center ">
          <p className="text-2xl font-bold">Total Cost: $ {total} </p>
          <button
            onClick={handleSortByPrice}
            className=" rounded-full text-lg font-semibold text-[#9538E2] px-5 py-3 border-2 border-[#9538E2] "
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            disabled={total === 0}
            className="bg-[#9538E2]  rounded-full py-3 px-5 text-lg font-medium text-white text-[#09080F99] flex items-center gap-3"
          >
            Purchase
          </button>
          {showModal && (
              <div  className="fixed  justify-center inset-0 bg-gray-500 bg-opacity-75 flex items-center ">
                <div className="bg-white  flex flex-col gap-2 items-center justify-between p-8 rounded-2xl shadow-lg max-w-sm w-full">
                  <img src={right} alt="" />
                  <h3 className="font-bold text-lg mt-3">Payment Successfully</h3>
                  <hr className=" w-full"/>
                  <p className="py-4">Thanks for purchasing.</p>
                  <p>Total: $ {total}</p>
                  <button onClick={handleCloseModal}  className="btn w-full rounded-full">Close</button>
                  
                </div>
            </div>
          )

          }
         
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <CartProduct key={product.product_id} product={product}></CartProduct>
        ))}
      </div>
    </>
  );
};

export default CartProducts;
