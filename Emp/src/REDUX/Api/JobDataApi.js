import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const jobApi = createApi({

    reducerPath: 'jobApi',

    baseQuery: fetchBaseQuery({ baseUrl: '/jobs' }),

    endpoints: (builder) => ({

        jobData: builder.query({ query: () => `/jobdata` }),
        jobDataOne: builder.query({ query: (id) => `/jobdata/${id}` }),



    }),

});

export const { useJobDataQuery, useJobDataOneQuery } = jobApi;