import { configureStore } from "@reduxjs/toolkit";
import cinemaSlice from "Slices/cinemaSlice";
import movieSlice from "Slices/movieSlice";
import authenticationSlice from "Slices/authenticationSlice";
import bookingTicketSlice from "Slices/bookingTicketSlice";
const store = configureStore({
  reducer: { movieSlice, cinemaSlice, authenticationSlice, bookingTicketSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export default store;
