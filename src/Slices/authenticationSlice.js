import Swal from "sweetalert2";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: userAPI } = require("Services/userAPI/UserAPI");

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  accessToken: JSON.parse(localStorage.getItem("accessToken")) || null,
  bookedTicketList: [],
  isRegisterSuccess: false,
  error: null,
  isLoading: false,
};
const registerNewUser = createAsyncThunk(
  "user/register",
  async (params, thunkAPI) => {
    try {
      const response = await userAPI.registerNewUser(params);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const signIn = createAsyncThunk("user/signIn", async (params, thunkAPI) => {
  try {
    const response = await userAPI.signIn(params);
    return response;
  } catch (error) {
    throw error;
  }
});

const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const response = await userAPI.updateUser(user);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const getUserInformation = createAsyncThunk(
  "user/getUserInformation",
  async (params, thunkAPI) => {
    try {
      const response = await userAPI.getUserInformation(params);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    registerUserFinish: (state, action) => {
      // reset isRegisterSuccess
      state.isRegisterSuccess = false;
    },
    logOutUser: (state, action) => {
      state.currentUser = null;
      state.accessToken = null;
      localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    // register new user
    builder.addCase(registerNewUser.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.statusCode === 200) {
        state.isRegisterSuccess = true;
        state.error = null;
      } else {
        state.isRegisterSuccess = false;
        state.error = action.payload.content;
      }
    });
    builder.addCase(registerNewUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerNewUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error.message;
    });
    // sign in
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.statusCode === 200) {
        state.currentUser = action.payload.content;
        state.accessToken = action.payload.content.accessToken;
        state.error = null;
        localStorage.setItem(
          "currentUser",
          JSON.stringify(action.payload.content)
        );
        localStorage.setItem(
          "accessToken",
          JSON.stringify(action.payload.content.accessToken)
        );

        return;
      }
      state.error = action.payload.content;
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error.message;
    });
    // get user informations
    builder.addCase(getUserInformation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookedTicketList = action.payload.content.thongTinDatVe;
    });
    builder.addCase(getUserInformation.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInformation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.content;
    });
    // update user informations
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.statusCode) {
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
          timer: 2000,
        });
      }
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.content;
    });
  },
});
export const { registerUserFinish, logOutUser } = authenticationSlice.actions;
export { registerNewUser, signIn, getUserInformation, updateUser };
export default authenticationSlice.reducer;
