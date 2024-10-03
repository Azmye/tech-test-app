import { ITransaction } from "../../../types/transaction";
import { apiRoot } from "../api";

const transactionApi = apiRoot.injectEndpoints({
  endpoints: (builder) => ({
    transactions: builder.query<ITransaction[], void>({
      query: () => ({
        url: "/api/transaction/index",
        method: "POST",
      }),
    }),
    transaction: builder.query<ITransaction, { id: number }>({
      query: ({ id }) => ({
        url: `/api/transaction/detail/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useTransactionsQuery, useTransactionQuery } = transactionApi;
