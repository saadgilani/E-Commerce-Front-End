import logo from "./logo.svg";
import "./App.css";
import Products from "./pages/products/product";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import PageError from "./pages/PageError/PageError";
import { Navigate } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NavBar from "./components/navBar/navBar";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import UserDetails from "./pages/Form/UserDetails";
import OrderCompleted from "./pages/orderCompleted/orderCompleted";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Counter from "./components/counter/counter";

import RouteWork from "./components/RouteWork/RouteWork";
import Carousel from "./components/carousel/carousel";

//Most Parent File

function App() {
  
  return (
    <div className="App">   
   
      {/* <div id="loggedIn">
        {user && (
          <div>
            <RouteWork image={user.picture} userName={user.name}/>

            <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          </div>
        )}
      </div> */}
      <RouteWork></RouteWork>
    </div>
  );
}

export default App;
