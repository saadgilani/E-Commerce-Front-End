import { INC_COUNT,DEC_COUNT, RES_COUNT } from "./countType";

export const Increase_Count=()=>{
    return{
        type:INC_COUNT,
        info:"User increased count",
    };
}

export const Decrease_Count=()=>{
    return{
        type:DEC_COUNT,
        info:"User wants to decrease count"
    };
}
export const Reset_Count=()=>{
    return{
        type:RES_COUNT,
        info:"Resets count"
    };
}