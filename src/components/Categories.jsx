import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col w-[250px] p-6 border h-fit rounded-2xl bg-white gap-6 ">
      <NavLink to ='/' className={({isActive})=>`hover:bg-[#9538E2] bg-[#09080F0D] rounded-full py-3 px-5 text-lg font-medium text-[#09080F99] ${isActive? 'bg-[#9538E2] font-extrabold text-lg text-white':''}`} >All Product</NavLink>
      {categories.map((category) => (
            <NavLink to = {`/category/${category.category}`}
              key={category.category}
              className={({isActive})=>`hover:bg-[#9538E2] bg-[#09080F0D] rounded-full py-3 px-5 text-lg font-medium text-[#09080F99] ${isActive? 'bg-[#9538E2] font-extrabold text-lg text-white':''}`}>
              {category.category}
            </NavLink>
      ))}
    </div>
  );
};

export default Categories;
