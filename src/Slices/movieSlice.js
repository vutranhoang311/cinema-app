import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "Services/movieAPI/movieAPI";
const initialState = {
  movieList: [],
  movieListDefault: [],
  banners: [],
  movie: {},
  moviePlaySchedule: null,
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
      return response.content;
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
      return response.content;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const getMovieInfo = createAsyncThunk(
  "movie/getMovieInfo",
  async (params, thunkAPI) => {
    try {
      const response = await movieAPI.getMovieInfo(params);
      return response.content;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const getMoviePlaySchedule = createAsyncThunk(
  "movie/getMoviePlaySchedule",
  async (params, thunkAPI) => {
    try {
      const response = await movieAPI.getMoviePlaySchedule(params);
      return response.content;
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
    // GET MovieInfo
    builder.addCase(getMovieInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movie = action.payload;
    });
    builder.addCase(getMovieInfo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log(state.error);
    });
    // GET Movie Play Schedule
    builder.addCase(getMoviePlaySchedule.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moviePlaySchedule = action.payload;
    });
    builder.addCase(getMoviePlaySchedule.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMoviePlaySchedule.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log(state.error);
    });
  },
});

// export actions
export { getBanner, getMovieList, getMovieInfo, getMoviePlaySchedule };
export const { setNowPlayingStatus, setUpcomingPlayingStatus } =
  movieSlice.actions;
// export reducer
export default movieSlice.reducer;
