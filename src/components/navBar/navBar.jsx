import './navBar.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function NavBar(props){
   
    var user=localStorage.getItem("user");
    if(user){
      user = jwtDecode(user);
    }

    const navigate=useNavigate();
    const SignOutHandle=()=>{
       
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
      <div>
        <div className='mrginbtm'>
      <div id="Nav_Bar">
        <ul id="navList">

          {/* src={user.picture} */}
          {/* {user.name} */}
           {user &&
            <li><img className='userImage' src={user.picture} alt=""/></li>}

            {user &&
            <li><h3 className='userTitle'>{user.name}</h3></li>}
            
            <li><button className='ULItemButton' onClick={SignOutHandle}>Sign Out</button></li>
            <li className='ULItem'><Link to="/category">Categories</Link></li>
            <li className='ULItem'><Link to="/products">Products</Link></li>
            <li className='ULItem'><Link to="/checkout/cart">Cart</Link></li>
            <li className='ULItem2'><Link to="/"><h2 className='Ecommerce'>E Commerce Store</h2></Link></li>
           
        </ul>
      </div> 
      </div>
      <Outlet/>
      </div> 


      
    );
}

export default NavBar;