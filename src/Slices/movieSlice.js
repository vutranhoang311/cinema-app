import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "Services/movieAPI/movieAPI";
const initialState = {
  movieList: [],
  movieListDefault: [],
  banners: [],
  nowPlaying: false,
  upComingPlaying: false,
  isLoading: false,
  error: null,
};

const getBanner = createAsyncThunk(
  "movie/getBanner",
  async (params, thunkAPI) => {
    try {
      const response = await movieAPI.getBanner();
      return response;
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
      return response;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlayingStatus: (state, action) => {
      state.nowPlaying = !state.nowPlaying;
      if (state.nowPlaying) {
        if (state.upComingPlaying) state.upComingPlaying = false;
        state.movieList = state.movieListDefault.filter(
          (movie) => movie.dangChieu === state.nowPlaying
        );
      } else state.movieList = state.movieListDefault;
    },
    setUpcomingPlayingStatus: (state, action) => {
      state.upComingPlaying = !state.upComingPlaying;
      if (state.upComingPlaying) {
        if (state.nowPlaying) state.nowPlaying = false;
        state.movieList = state.movieListDefault.filter(
          (movie) => movie.sapChieu === state.upComingPlaying
        );
      } else state.movieList = state.movieListDefault;
    },
  },
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
      state.movieListDefault = action.payload;
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
export const { setNowPlayingStatus, setUpcomingPlayingStatus } =
  movieSlice.actions;
// export reducer
export default movieSlice.reducer;
