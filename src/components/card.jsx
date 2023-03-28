import React from "react";
import "./card.css"
import { Link } from "react-router-dom";

//Child of product.jsx


function Card(props){
    return(
            <div id="itemCard">
                <Link id={props.id} className="itemCardLink" to={`/product-details/${props.id}`}>
                <p>{props.id}</p>
                <p>{props.title}</p>
                <p>${props.price}</p>
                <p>{props.category}</p>
                <img src={props.image} className="cardImg" alt="itemImg" />
                </Link>
            </div>
            
    );
}

export default Card;