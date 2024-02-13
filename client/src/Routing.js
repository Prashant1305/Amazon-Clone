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
import ProductTest from "./components/Product/ProductTest";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminNavbar from "./pages/admin/AdminNavbar";
import AddProduct from "./pages/admin/AddProduct";

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
        <Route path="productCategory/:category" element={<ProductTest />} />
        <Route path="productTest" element={<ProductTest />} />

        <Route path="Admin" element={<AdminLayout />}>
          <Route index element={<AdminNavbar />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
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
