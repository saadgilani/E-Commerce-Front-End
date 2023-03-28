import { Link } from "react-router-dom";
import './Categories.css'
import { useEffect,useState } from "react";
import axios from "axios";
import { fetchCategories } from "../../services/apiFetcher";



function Categories(){
    const [categories,setCategories]=useState([]);
    
    useEffect(() => {
        let resp=fetchCategories()
        resp.then(res=>{
            let data=res.data;
    
            setCategories(data);
            //console.log(categories);
        })
      }, []);


    return(
        <div id="categoryPage">
          <h1>Select A Category</h1>

          <div id="webCategories">
          {
            categories.map((param,index)=>{
              return <Link key={index} className="Categories_itemLink" to={`/products/${param}`}>
              {param.toUpperCase()}
              </Link>
            })
          
          /* fetches categories and removes the duplicate categories on the frontend
          /* {[...new Set(categories)].map((param,index)=>{
  return <Link key={index} className="Categories_itemLink" to={`/products/${param}`}>{param.toUpperCase()}</Link>
  })} */}
           
          </div>
        </div>
        
    );
}

export default Categories;