import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increase_Count,Decrease_Count } from '../../redux/count/countAction'
import './counter.css';

const Counter=()=> {

    const selector = useSelector(state => state.count)

    const count=useSelector(
        (state) => {return state.sliceA.count}
    )

    const dispatch=useDispatch();

    const IncclickHandler=() =>{
        dispatch(Increase_Count());
    }
    const DecclickHandler=() =>{
        if(count>0){
        dispatch(Decrease_Count());
    }
    }

  return (
    <div>
     
        <div id='counterz'>
        <button onClick={DecclickHandler} className="counterWork">-</button>
        <h2 className='counterText'> {count}</h2>
        <button onClick={IncclickHandler} className="counterWork">+</button>
        </div>
        </div>
  )
}

export default Counter;