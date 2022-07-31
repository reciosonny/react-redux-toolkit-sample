import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addTodo, todoList } from "../slices/todoSlice";


const useTodoStore = () => {  

  const dispatch = useAppDispatch();
  const value = useAppSelector(todoList);

  const getStoreValue = () => {  
    return value;
  };
  
  const dispatchAddTodo = (item: any) => {
    dispatch(addTodo(item));
  };
  

  useEffect(() => {
      
    return () => {
      
    }
  }, []);
  
  return { getStoreValue, dispatchAddTodo };
};

export default useTodoStore;