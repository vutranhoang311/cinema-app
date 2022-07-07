import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "Slices/movieSlice";

const store = configureStore({ reducer: movieSlice });
export default store;
