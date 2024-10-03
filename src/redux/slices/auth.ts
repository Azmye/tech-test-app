import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitialState } from "../../types/auth";

const initialState: IAuthInitialState = {
  user: null,
  isInit: false,
  isAuth: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initAuth: (state, actions) => {
      state.isInit = true;
      state.isAuth = actions.payload.isAuth;
      state.user = actions.payload.user;
    },
    setLogin: (state, actions) => {
      state.user = actions.payload.user;
      state.isAuth = actions.payload.isAuth;
    },
    setLogout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export default slice.reducer;

export const { initAuth, setLogin, setLogout } = slice.actions;
