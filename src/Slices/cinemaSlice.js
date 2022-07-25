import cinemaAPI from "Services/cinemaAPI/cinemaAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  cinemaList: [],
  isLoading: false,
  error: null,
};

const getCinemaScheduleList = createAsyncThunk(
  "cinema/getCinemaList",
  async (params, thunkAPI) => {
    try {
      const response = await cinemaAPI.getCinemaList();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const cinemaSlice = createSlice({
  name: "cinemas",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCinemaScheduleList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cinemaList = action.payload;
    });
    builder.addCase(getCinemaScheduleList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCinemaScheduleList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// export reducer
export default cinemaSlice.reducer;
// export actions
export { getCinemaScheduleList };