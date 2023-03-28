import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './Cart.css';
import Checkout from "../Checkout/Checkout";
import Card from "../../components/card";
import { useSelector,useDispatch } from "react-redux";
import CartItem from "../../components/cartItem/cartItem";
import { Rem_Item, Update_Count } from "../../redux/cart/cartAction";
import Counter from "../../components/counter/counter";
import { useState,useEffect } from "react";

function Cart()
{
    const [total, setTotal] = useState(0.0);
    const dispatch=useDispatch();

    const selector = useSelector(state => state.item)

    const itemz=useSelector(
        (state) => {return state.sliceB.item}
    )

    let customObj={
      itemData:itemz,
      count:0
    }

    const handleDelItem=(param,index)=>{

      // let customObj={
      //   itemData: param.itemData,
      //   count:param.count
      // }
      alert("Item Removed");
      dispatch(Rem_Item(index))
    }

    const IncrementCount=(param,index)=>{
        let newCount=++param.count;
        dispatch(Update_Count(param,newCount,index));
    }
    const DecrementCount=(param,index)=>{
      if(param.count>1){
        let newCount=--param.count;
        dispatch(Update_Count(param,newCount,index));
      }
    }
    useEffect(() => {
      // Calculate the total price from itemz array
      let total = itemz.reduce((acc, item) => acc + item.itemData.price * item.count, 0);
      setTotal(total);
    }, [itemz]);


    return (<div>
        <h1>Cart:</h1>

        {itemz.map((param, index) => {
          return (
            // <CartItem
            //   title={param.title}
            //   price={param.price}
            //   description={param.description}
            //   image={param.image}
            // />
            <div id="itemCard">
            <p>{param.itemData.title}</p>
            <p>${param.itemData.price}</p>
            <img src={param.itemData.image} className="cardImg" alt="itemImg" />

            <div id="cartCounter">
            <button className="cartCounterBtns" onClick={()=>{
              IncrementCount(param,index);
            }}>+</button>

            <p>{param.count}</p>

            <button className="cartCounterBtns" onClick={()=>{
              DecrementCount(param,index);
            }}>-</button>

        </div>
            {/* <Counter/> */}
            <button className="remCart" onClick={()=>{
              handleDelItem(param,index)
            }}>Remove From Cart</button>

        
        </div>

          );
        })}
        
        <h2>Total: ${total.toFixed(2)}</h2>
        <h1>Further Rendering Checkout: </h1>
        <Checkout/>

     
    </div>);
}

export default Cart;