const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  danhSachPhongVe: [],
};

const bookingTicketSlice = createSlice({
  name: "bookingTicket",
  initialState: initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(getCinemaScheduleList.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.cinemaList = action.payload;
  //     });
  //     builder.addCase(getCinemaScheduleList.pending, (state, action) => {
  //       state.isLoading = true;
  //     });
  //     builder.addCase(getCinemaScheduleList.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     });
  //   },
});

export default bookingTicketSlice.reducer;
