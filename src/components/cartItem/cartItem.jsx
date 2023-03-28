import React from "react";
import "./cartItem.css"
import { Link } from "react-router-dom";

//Child of product.jsx


function CardItem(props){
    return(
            <div id="itemCard">
                <p>{props.title}</p>
                <p>${props.price}</p>
                <img src={props.image} className="cardImg" alt="itemImg" />
                <p>Count</p>
                <button>Remove From Cart</button>
            </div>
            
    );
}

export default CardItem;