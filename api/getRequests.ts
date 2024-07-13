// import AxiosInstance from "./interseptor";

// export const getAllProductData = () => {
//   AxiosInstance.get("/products").then((res) => {
//     console.log(res, "res from req");
//     return res;
//   });
// };
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'allProducts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productApi;
