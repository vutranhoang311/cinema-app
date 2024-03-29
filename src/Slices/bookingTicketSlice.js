import ticketAPI from "Services/ticketAPI/ticketAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  choosingSeats: [],
  ticketListByMovie: null,
  totalPrice: 0,
  isLoading: false,
  error: null,
};

const getTicketList = createAsyncThunk(
  "ticket/getTicketList",
  async (idMovie, thunkAPI) => {
    try {
      const response = await ticketAPI.getTicketList(idMovie);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const purchaseTicket = createAsyncThunk(
  "ticket/purchase",
  async (ticketData, thunkAPI) => {
    try {
      const response = await ticketAPI.purchaseTicket(ticketData);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const bookingTicketSlice = createSlice({
  name: "bookingTicket",
  initialState: initialState,
  reducers: {
    modifyChoosingSeats: (state, action) => {
      const indexSeat = state.choosingSeats.findIndex(
        (seat) => action.payload.tenGhe === seat.tenGhe
      );
      if (indexSeat === -1) {
        state.choosingSeats.push(action.payload);
        state.totalPrice += action.payload.giaVe;
      } else {
        state.choosingSeats.splice(indexSeat, 1);
        state.totalPrice -= action.payload.giaVe;
      }
    },
  },
  extraReducers: (builder) => {
    // GET TICKET LISTS
    builder.addCase(getTicketList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ticketListByMovie = action.payload.content;
    });
    builder.addCase(getTicketList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTicketList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    // purchaseTicket
    builder.addCase(purchaseTicket.fulfilled, (state, action) => {
      state.isLoading = false;
      
    });
    builder.addCase(purchaseTicket.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(purchaseTicket.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default bookingTicketSlice.reducer;

export { getTicketList, purchaseTicket };
export const { modifyChoosingSeats } = bookingTicketSlice.actions;
