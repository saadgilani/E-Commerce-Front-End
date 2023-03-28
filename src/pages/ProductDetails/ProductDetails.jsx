import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ProductDetails.css'
import Counter from "../../components/counter/counter";
import { useSelector,useDispatch } from "react-redux";
import { Add_Item } from "../../redux/cart/cartAction";
import { fetchItemByID } from "../../services/apiFetcher";
import { Reset_Count } from "../../redux/count/countAction";
import { useNavigate } from "react-router-dom";


function ProductDetails(){

    const navigate=useNavigate();
    const [singleItem,setSingleItem]=useState([]);
    const itemParam=useParams();


    const dispatch=useDispatch();

    const selector = useSelector(state => state.item)

    const count=useSelector(
        (state) => {return state.sliceA.count}
    )

    const itemz=useSelector(
        (state) => {return state.sliceB.item}
    )

    const Add_local_item=()=>{


        if(count===0)
        {
            alert("Please Select a quantity")
        }
        else{

        let customArr={
            itemData: singleItem,
            count:count
        }
        dispatch(Add_Item(customArr));
        dispatch(Reset_Count());
        console.log("Inside local item:"+itemz);
        navigate('/checkout/cart');
        //count=0;
        //console.log("COOOOONTTTT: "+count);
        }

    }



    useEffect(() => {
          //console.log(linkParams.id);
          let resp=fetchItemByID(itemParam.id);
          
            resp.then((res) => {
              let data = res.data;
              setSingleItem(data);
    
              console.log(data);
              console.log(itemParam)
            });
      }, []);
    

    return(
        <div >
            <h1>Product Details</h1>
            <div id="PDBtnManager">
            <Link className="Product_Details_itemLink" to="/">Back to home</Link>
            </div>
            <div id="DetCard">
            <div id="prodDetPage">
          
        <div id="productDetail_Page">
        <img className="Product_Details_Image" src={singleItem.image} alt="" />
            <div id="detailsCard">
          
                <p><span className="PD_titleText">ID:</span> {singleItem.id}</p>
                <p><span className="PD_titleText">Title:</span> {singleItem.title}</p>
                <p><span className="PD_titleText">Price:</span> ${singleItem.price}</p>
                <p id="itemDesc"><span className="PD_titleText">Description:</span> {singleItem.description}</p>
            </div>  
        </div>
        <div className="cartFunction">
        <button onClick={Add_local_item} className="addToCart">Add to cart</button>
        <Counter/>
        </div>
        </div>
        </div>
        </div>
    );
}

export default ProductDetails;