import { IUser } from "../../../types/user";
import { apiRoot } from "../api";

const userApi = apiRoot.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query<IUser[], void>({
      query: () => ({
        url: "/api/master/user/index",
        method: "POST",
      }),
    }),
    user: builder.query<IUser, { id: number }>({
      query: ({ id }) => ({
        url: `/api/master/user/detail/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useUsersQuery, useUserQuery } = userApi;
