import axios from "axios";

export const fetchAllProducts= async()=>{
        let res= await axios.get("http://localhost:5000/products/getAllProducts");
        return res;
}
export const fetchProductsByCategories= async(categoryName)=>{
    let res= await axios.get(`http://localhost:5000/products/getByCategory?categoryName=${categoryName}`);
    return res;
}
export const fetchCategories= async(categoryName)=>{
    let res= await axios.get('http://localhost:5000/products/getCategories');
    return res;
}
export const fetchItemByID= async(ID)=>{
    let res= await axios.get(`http://localhost:5000/products/getProductByID?id=${ID}`);
    return res;
}


// Previous All Products link https://fakestoreapi.com/products


//Previous category fetcher link 'https://fakestoreapi.com/products/categories'

// previous fetcher for category specific items `https://fakestoreapi.com/products/category/${categoryName}`

// previous ID specific item fetcher `https://fakestoreapi.com/products/${ID}`