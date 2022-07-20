import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "Services/movieAPI/movieAPI";
const initialState = {
  movieList: [],
  banners: [],
  isLoading: false,
  error: null,
};

const getBanner = createAsyncThunk(
  "movie/getBanner",
  async (params, thunkAPI) => {
    try {
      const response = await movieAPI.getBanner();
      return response.data.content;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const getMovieList = createAsyncThunk(
  "movie/getMovieList",
  async (params, thunkAPI) => {
    try {
      const response = await movieAPI.getMovieList({ params });
      return response.data.content;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET BANNER
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.banners = action.payload;
    });
    builder.addCase(getBanner.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getBanner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    // GET MovieList
    builder.addCase(getMovieList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieList = action.payload;
    });
    builder.addCase(getMovieList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// export actions
export { getBanner, getMovieList };

// export reducer
export default movieSlice.reducer;
