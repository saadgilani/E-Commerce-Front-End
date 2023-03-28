import { Link,Outlet } from "react-router-dom";
import "../Checkout/Checkout.css";

function Checkout(props){
    return(
        <div>
           <div id="Card_Pages">
        <Link className="itemLink3"  to="/checkout/cart/orderCompleted">Order Completed</Link>
        <Link className="itemLink3"  to="/checkout/cart/UserDetailsForm">User Details Form</Link>
        </div>

        <Outlet/>
        </div>
    );
}

export default Checkout;