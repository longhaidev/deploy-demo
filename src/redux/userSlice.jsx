import { createSlice } from "@reduxjs/toolkit";
import { reduce } from "lodash";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  account: {
    email: "",
    username: "",
  },
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: INITIAL_STATE,
  reducers: {
    doLogin: (state, action) => {
      console.log(action.payload);
      toast.success("Login Successfully");
      return {
        ...state,
        account: {
          email: action.payload.email,
          role: action.payload.role,
          username: action.payload.username,
          access_token: action.payload.access_token,
          refresh_token: action.payload.refresh_token,
        },
        isAuthenticated: true,
      };
    },
    doLogOut: (state, action) => {
      toast.success("Logout sucessfully");
      return {
        ...state,
        account: {
          access_token: "",
          email: "",
          image: "",
          refresh_token: "",
          role: "",
          username: "",
        },
        isAuthenticated: false,
      };
    },
  },
});

export const { doLogin, doLogOut } = userSlice.actions;
export default userSlice.reducer;
