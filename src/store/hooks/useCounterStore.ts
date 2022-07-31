import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { decrement, increment, selectCount } from "../slices/counterSlice";


const useCounterStore = () => {  

  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  const getStoreValue = () => {  
    return count;
  };

  const dispatchIncrement = () => {
    console.log('dispatch increment');
    dispatch(increment());
  };
  
  const dispatchDecrement = () => {
    dispatch(decrement());
  };
  
  // const dispatchIncrementByAmount = (value) => {
  //   // dispatch(incrementByAmount(value));
  // };
  
  // const dispatchIncrementAsync = (value) => {
  //   // dispatch(incrementAsync(value));
  // };
  

  useEffect(() => {
    
  
    return () => {
      
    }
  }, []);
  
  return { getStoreValue, dispatchIncrement, dispatchDecrement };
};

export default useCounterStore;