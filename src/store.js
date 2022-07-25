import { configureStore } from "@reduxjs/toolkit";
import cinemaSlice from "Slices/cinemaSlice";
import movieSlice from "Slices/movieSlice";

const store = configureStore({ reducer: { movieSlice, cinemaSlice } });
export default store;
