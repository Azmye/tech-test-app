import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setLogout } from "../slices/auth";

const invalidToken: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    if (isRejectedWithValue(action)) {
      const { err_code } = action.payload as { err_code?: string };

      if (err_code === "403") {
        console.log(err_code);
        store.dispatch(setLogout());
      }
    }

    return result;
  };

export { invalidToken };
