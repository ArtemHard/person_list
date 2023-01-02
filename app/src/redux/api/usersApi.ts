// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, Users } from "../reducers/types/personsTypes";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => "/",
    }),
    getPerson: builder.query<User, string | undefined>({
      query: (id) => `/${id ? id : ''}`
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetPersonQuery } = usersApi;
