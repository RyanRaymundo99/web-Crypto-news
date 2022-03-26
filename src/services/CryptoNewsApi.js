import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cyptoNewsHeader= {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cyptoNewsHeader})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      })
    })
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;