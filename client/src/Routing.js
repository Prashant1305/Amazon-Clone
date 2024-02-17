import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ErrorRoute from "./pages/ErrorRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignOut from "./pages/SignOut";
import Error from "./pages/Error";
import HomePageContext from "./Context/HomePageContext";
import ProductInDetails from "./pages/ProductInDetails";
import Cart from "./pages/Cart";
<<<<<<< HEAD
import ProductTest from "./components/Product/ProductTest";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import DeleteProduct from "./pages/admin/DeleteProduct";
=======
import ProductItems from "./pages/ProductItems";
>>>>>>> 79be36fbe91ec41c064f1f1c3dee55a3681d0cbc

function Routing() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route
          index
          element={
            <HomePageContext>
              <Home />
            </HomePageContext>
          }
        />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signout" element={<SignOut />} />
        <Route path="product/:id" element={<ProductInDetails />} />
        <Route path="cart" element={<Cart />} />
<<<<<<< HEAD
        <Route path="productTest" element={<ProductTest />} />

        <Route path="Admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="deleteproduct" element={<DeleteProduct />} />
        </Route>
=======
        <Route path="productpage" element={<ProductItems />} />
>>>>>>> 79be36fbe91ec41c064f1f1c3dee55a3681d0cbc
        <Route path="*" element={<ErrorRoute />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routing;
