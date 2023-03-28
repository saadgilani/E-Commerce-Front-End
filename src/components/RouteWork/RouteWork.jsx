import Products from "../../pages/products/product";
import Home from "../../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "../../pages/Categories/Categories";
import PageError from "../../pages/PageError/PageError";
import { Navigate } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import NavBar from "../navBar/navBar";
import Cart from "../../pages/Cart/Cart";
import UserDetails from "../../pages/Form/UserDetails";
import OrderCompleted from "../../pages/orderCompleted/orderCompleted";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Counter from "../counter/counter";
import PrivateRoutes from "../../pages/privateRoutes/privateRoutes";


function RouteWork(props){

  //let user= localStorage.getItem("user");
  
  return(
    <Routes>
              <Route
                path="/"
                element={<NavBar  image={props.image} userName={props.userName}/>}
              >
                <Route path="/home" element={
                <PrivateRoutes>
                <Home />
                </PrivateRoutes>
                }></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/category" element={<Categories />}></Route>
                <Route
                  path="/products/:category_name"
                  element={<Products />}
                ></Route>
                <Route path="/page-error" element={<PageError />}></Route>
                <Route
                  path="/product-details/:id"
                  element={<ProductDetails />}
                ></Route>
                <Route path="/checkout/cart" element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>}>
                  <Route
                    path="orderCompleted"
                    element={<OrderCompleted />}
                  ></Route>
                  <Route
                    path="UserDetailsForm"
                    element={<UserDetails />}
                  ></Route>
                </Route>

                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route
                  path="/*"
                  element={<Navigate to="/page-error" />}
                ></Route>
              </Route>

              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
  );
}

export default RouteWork;