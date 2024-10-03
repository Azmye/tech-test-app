import { IUser } from "../../../types/user";
import { apiRoot } from "../api";

const userApi = apiRoot.injectEndpoints({
  endpoints: (build) => ({
    users: build.query<IUser[], void>({
      query: () => ({
        url: "/api/master/user/index",
        method: "POST",
      }),
    }),
  }),
});

export const { useUsersQuery } = userApi;
