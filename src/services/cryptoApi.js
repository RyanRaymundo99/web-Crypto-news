import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
   'x-rapidapi-key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
  
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/crypto/${coinId}`),
      }),
    })
  });
  
  export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;