import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => ({
                url: 'posts',
            }),
        }),

        deletePost: builder.mutation({
            query: (id) => {
                console.log('DELETE ID: ', id)
                return {
                    url: `posts/${id}`,
                    method: 'DELETE'
                }
            }
        }),
    })
})

export const { useGetAllPostsQuery, useDeletePostMutation } = postApi