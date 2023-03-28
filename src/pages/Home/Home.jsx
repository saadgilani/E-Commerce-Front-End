import Products from "../products/product";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../../components/carousel/carousel";

function Home() {
  return (
    <div className="Home_App">
      <h1 className="pageTitle">Home Page</h1>
    
     <div className="outerCaroBack">
      <div className="caroBack">
        <Link to="/products">
          <Carousel />
        </Link>
      </div>
      </div>

      <div id="Pages">
        {/* <Link className="itemLink" to="/products">
          All Products
        </Link> */}
        <Link className="itemLink2" to="/checkout/cart">
          <h2 className="linkText">Cart</h2>
        </Link>

        <Link className="itemLink " to="/category">
          <h2 className="linkText2">Select By Category</h2>
        </Link>
      </div>

      {/* <Products/> */}
    </div>
  );
}

export default Home;
