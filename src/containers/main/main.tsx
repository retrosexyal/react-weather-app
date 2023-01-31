import React, { useEffect } from "react";
import axios from "axios";
import { fetchCity } from '../../redux/slices/citySlice';
import { useSelector, useDispatch } from "react-redux";

export const Main = () => {
    const dispatch = useDispatch();
    const fetch = async () =>{
        try{
            dispatch(fetchCity())
        } catch (error) {
            console.log(error)
        }
    }
    
  return <div>Main</div>;
};
