import { ADD_ITEM,REM_ITEM,UPDATEITEM_COUNT } from "./cartType";

export const Add_Item=(itemData)=>{
    return{
        type:ADD_ITEM,
        payload:{
            info:"User added item into cart",
            items:itemData,
        }
    };
}
export const Rem_Item=(index)=>{
    return{
        type:REM_ITEM,
        payload:{
            info:"User deleted item",
            index:index
        }
    }
}
export const Update_Count=(array,newCount,indexOfCount)=>{
    return{
        type:UPDATEITEM_COUNT,
        payload:{
            info:"State to update the count only",
            newArr: array,
            newCount: newCount,
            index: indexOfCount
        }
    }
}