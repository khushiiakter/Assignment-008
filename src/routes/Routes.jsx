import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import CartProducts from "../components/CartProducts";
import WishCards from "../components/WishCards";
import ErrorPage from "../pages/ErrorPage";
import Services from "../pages/Services";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('../categories.json'),
        children:[
          {
            path:"/",
            element: <ProductCards></ProductCards>,
            loader:() => fetch('../gadgets.json'),
          },
          {
            path:"/category/:category",
            element: <ProductCards></ProductCards>,
            loader:() => fetch('../gadgets.json'),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path:"/dashboard/cart",
            element: <CartProducts  ></CartProducts>,
            
          },
          {
            path:"/dashboard/wishlists",
            element: <WishCards></WishCards>
          },
          
          
        ],
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader:() => fetch('../gadgets.json'),
      },
    ],
  },
]);
export default routes;