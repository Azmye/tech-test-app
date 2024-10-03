import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setLogout } from "../slices/auth";

const invalidToken: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    if (isRejectedWithValue(action)) {
      const { status } = action.payload as { status: number };

      if (status === 403) {
        store.dispatch(setLogout());
      }
    }

    return result;
  };

export { invalidToken };
