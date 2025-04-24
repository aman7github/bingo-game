import { configureStore } from "@reduxjs/toolkit";
import randomReducer from '../features/bingoGameReducer/bingoSlice'
import bingotaskReducer from "../features/blogReducer/taskSlice";


// <----------------Import configureStore from Redux Toolkit----------------------------------------->

const store = configureStore({

// <-------------------Both reducer combined and attached to store-------------------------------------->
reducer:{
  random:randomReducer,
  task:bingotaskReducer
}


})

export default store