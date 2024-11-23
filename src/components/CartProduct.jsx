

const CartProduct = ({product}) => {
    const {
        rating,
        availability,
        specification,
        description,
        price,
        product_image,
        product_title,
      } = product;
  
  return (
    <div className=" flex  rounded-2xl items-center  p-8 bg-base-100 shadow-xl">
      <figure className="h-[124px] w-[200px]">
        <img className="w-full h-full object-cover rounded-xl" src={product_image} alt="Album" />
      </figure>
      <div className="flex flex-col items-start text-left ml-8">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: $ {price}</p>
        <p>{description}</p>
       
        
      </div>
    </div>
  );
};

export default CartProduct;
