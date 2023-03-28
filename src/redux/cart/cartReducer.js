import { Add_Item } from "./cartAction";
import { ADD_ITEM, REM_ITEM, UPDATEITEM_COUNT } from "./cartType";

const INITIAL_STATE = {
  item: [],
};

const Item_Reducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let itemEx = [...prevState.item];

      console.log("SUPER" + JSON.stringify(itemEx));

      // itemEx.forEach(element=>{
      //     if(element.itemData.title===action.payload.items.itemData.title){
      //         alert("Item Already In Cart");
      //     }

      // })

      // if(itemEx.itemData.title.includes(action.payload.items.itemData.title)){
      //     alert("Item Already In Cart");
      // }
      // const isItemInCart = itemEx.some(item => item.itemData.title === action.payload.items.itemData.title);
      // if (isItemInCart) {
      //     //item.count=item.count+action.payload.items.count;
      //     alert("Item already in cart");

      //     itemEx.count=itemEx.count+action.payload.items.count;
      //     console.log("AFTER RANA: "+ itemEx.indexOf(itemEx.count))

      //     return{
      //         ...prevState,
      //     }
      // }else{
      //     alert("Item added In Cart")
      //     return{
      //     ...prevState,
      //     item: [...prevState.item, action.payload.items],
      // }
      // }
      const isItemInCart = itemEx.some(
        (item) => item.itemData.title === action.payload.items.itemData.title
      );
      if (isItemInCart) {
        const updatedItems = itemEx.map((item) => {
          if (item.itemData.title === action.payload.items.itemData.title) {
            return {
              ...item,
              count: item.count + action.payload.items.count,
            };
          } else {
            return item;
          }
        });
        alert("Item already in cart");
        return {
          ...prevState,
          item: updatedItems,
        };
      } else {
        alert("Item added In Cart");
        return {
          ...prevState,
          item: [...prevState.item, action.payload.items],
        };
      }

    //console.log(prevState.item)

    case REM_ITEM:
      // const newProducts= prevState.item.filter(
      //     item => item.id !== action.payload.newArr.id
      // )
      //console.log(newProducts)

      // console.log("ITEMS ARRAY: "+JSON.stringify(prevState.item,0,null))
      let newArr = [...prevState.item];
      newArr.splice(action.payload.index, 1);
      //console.log("Custom ARR: "+ JSON.stringify(customeArr))
      //  alert("inside of payload: "+action.payload.index)
      // console.log("customised Array: "+JSON.stringify(customeArr))
      return {
        ...prevState,
        item: newArr,
      };

    case UPDATEITEM_COUNT:
      let newArr2 = [...prevState.item];

      let newArr1 = action.payload.newArr;
      let newCount = action.payload.newCount;
      let index = action.payload.index;

      console.log("HERE TYO" + index);
      newArr2[index].count = newCount;

      return {
        ...prevState,
        item: newArr2,
      };

    default:
      return prevState;
  }
};

export default Item_Reducer;
