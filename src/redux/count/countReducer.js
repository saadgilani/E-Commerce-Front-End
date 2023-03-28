import { INC_COUNT,DEC_COUNT,RES_COUNT } from "./countType";

const INITIAL_STATE={
    count:0
}

const countReducer=(prevState=INITIAL_STATE,action)=>{
    switch(action.type){
        case INC_COUNT:
            return{
                ...prevState,
                count:prevState.count+1
            }
        case DEC_COUNT:
            return{
                ...prevState,
                count:prevState.count-1
            }

        case RES_COUNT:
            return{
                ...prevState,
                count:0
            }

        default:
            return prevState
    }
}

export default countReducer;