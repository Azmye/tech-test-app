import { ILoginResponse } from "../../../types/auth";
import { apiRoot } from "../api";

interface LoginRequest {
  username: string;
  password: string;
}

const loginApi = apiRoot.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
