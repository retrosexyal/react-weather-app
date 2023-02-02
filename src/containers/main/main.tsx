import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchTest } from "../../redux/slices/test";
import { RootState, useAppDispatch } from "../../redux/store";

export const Main = () => {
    const dispatch = useAppDispatch();
    const data = useSelector( (state: RootState) => state.test.data)
    useEffect(()=>{
        dispatch(fetchTest())
        console.log(data)
    },[])
    
  

  return <div>{/* {console.log(data)} */}</div>;
};
