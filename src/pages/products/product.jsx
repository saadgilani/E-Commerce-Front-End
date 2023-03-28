import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import axios from "axios";
import "./product.css";
import { useParams,Link } from "react-router-dom";
import Home from "../Home/Home";
import { fetchAllProducts, fetchProductsByCategories } from "../../services/apiFetcher";

//Parent Of Card.jsx

// const fetchData=()=>{

// }

function Products() {
  const [itemData, setItemData] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const linkParams = useParams();
  // useEffect=()=>{
  //     axios.get('https://fakestoreapi.com/products')
  //     .then(res=>{
  //         let data=res.data;

  //         setItemData(data);
  //         console.log(itemData);
  //     })
  // }

  useEffect(() => {
    if (linkParams.category_name !== undefined) {
      //console.log(linkParams.id);
      const fetchData= async ()=>{
        let res=await fetchProductsByCategories(linkParams.category_name);

        setItemData(res.data);
        setSearchedItems(res.data);

        //console.log(data);
        console.log(linkParams);

      }
      fetchData();

      // axios.get(`https://fakestoreapi.com/products/category/${linkParams.category_name}`)
      //   .then((res) => {
      //     let data = res.data;
      //     setItemData(data);
      //     setSearchedItems(data);

      //     console.log(data);
      //     console.log(linkParams);
      //     //console.log("itemData "+itemData[0]);
      //     // console.log(data[0].id);
      //   });
    } else {

      const fetchData= async()=>{
        try {
          let res = await fetchAllProducts();

          setItemData(res.data);
          setSearchedItems(res.data);
        } catch (error) {
          console.log(error);
        }
        
      }

      fetchData();
      // axios.get("https://fakestoreapi.com/products").then((res) => {
      //   let data = res.data;
      //   setItemData(data);
      //   setSearchedItems(data);

      //   //console.log(searchedItems[0]);
      //   //console.log("itemData "+itemData[0]);
      //   // console.log(data[0].id);
      // });
    }
  }, []);

  const handleSearchNameChange = (event) => {
    const inputValue = event.target.value;
    //alert(inputValue);

    // searchedItems.title.sort();
    //console.log("SearchedItems: :D",searchedItems[0].title);
    const sUsers = itemData.filter((param) => {
      return param.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    setSearchedItems(sUsers);
  };

  const sortingByPrice1 = () => {
    //alert("hello");
    let arr = searchedItems.sort(function (a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    let arr2 = itemData.sort(function (a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setItemData(arr2);
    setSearchedItems(arr);
  };
  const sortingByPrice2 = () => {
    let arr = searchedItems.sort(function (a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    // let arr2 = itemData.sort(function (a, b) {
    //   return parseFloat(a.price) - parseFloat(b.price);
    // });
  //  arr2.reverse();
    //setItemData(arr2);
    arr.reverse();
    setSearchedItems(arr);
  };
  const sortingByTitle1 = () => {
    let arr = searchedItems.sort(function (a, b) {
      let title1 = a.title.toLowerCase();
      let title2 = b.title.toLowerCase();

      if (title1 < title2) {
        return -1;
      }
      if (title1 > title2) {
        return 1;
      }
      return 0;
    });


    let arr2 = itemData.sort(function (a, b) {
      let title1 = a.title.toLowerCase();
      let title2 = b.title.toLowerCase();

      if (title1 < title2) {
        return -1;
      }
      if (title1 > title2) {
        return 1;
      }
      return 0;
    });
    setItemData(arr2);
    setSearchedItems(arr);
  };

  const sortingByTitle2 = () => {
    let arr = searchedItems.sort(function (a, b) {
      let title1 = a.title.toLowerCase();
      let title2 = b.title.toLowerCase();

      if (title1 < title2) {
        return -1;
      }
      if (title1 > title2) {
        return 1;
      }
      return 0;
    });

    // let arr2 = itemData.sort(function (a, b) {
    //   let title1 = a.title.toLowerCase();
    //   let title2 = b.title.toLowerCase();

    //   if (title1 < title2) {
    //     return -1;
    //   }
    //   if (title1 > title2) {
    //     return 1;
    //   }
    //   return 0;
    // });
   // arr2.reverse();
    arr.reverse();
    console.log(arr);
    //setItemData(arr2);
    setSearchedItems(arr);
  };

  //   const categoryFilter=()=>{
  //    let categorisedItems= searchedItems.filter((params)=>{
  //         return searchedItems.category.toLowerCase().includes(linkParams.toLowerCase());
  //     })
  //     setSearchedItems(categorisedItems);

  //   }
  //  useEffect();

  //console.log("all of it: "+JSON.stringify(itemData));
  return (
    <>
      <h1>Search For A Product</h1>
      {/* <div className="prodHomeBtn1">
      <Link className="prodHomeBtn" to="/" element={<Home/>}>Home Page</Link>
      </div> */}
    
      <div id="searchForItem">
        <div class="box">
          <form name="search">
            <input
              type="text"
              class="product_Details_Input"
              name="txt"
              onChange={handleSearchNameChange}
            />
          </form>
          <i class="fas fa-search"></i>
        </div>

        <div id="sortSelection">
          <nav>
            <label for="touch">
              <span className="spaned">Sort</span>
            </label>
            <input type="checkbox" id="touch" />

            <ul class="slide">
              <li>
                <a onClick={sortingByPrice1} href="#">
                  By Price (Low to high)
                </a>
              </li>
              <li>
                <a onClick={sortingByPrice2} href="#">
                  By Price (High to low)
                </a>
              </li>
              <li>
                <a onClick={sortingByTitle1} href="#">
                  By Title (Ascending)
                </a>
              </li>
              <li>
                <a onClick={sortingByTitle2} href="#">
                  By Title (Descending)
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="displayCards">
        {searchedItems.map((param, index) => {
          return (
            <Card
              id={param.id}
              title={param.title}
              price={param.price}
              description={param.description}
              category={param.category}
              image={param.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Products;
