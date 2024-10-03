import { combineReducers } from "@reduxjs/toolkit";
import { apiRoot } from "./api/api";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authReducer } from "./slices";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isInit", "isAuth"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),

  [apiRoot.reducerPath]: apiRoot.reducer,
});
