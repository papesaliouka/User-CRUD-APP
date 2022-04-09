import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const testApi = createApi({
    reducerPath: 'testApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/users'}),
    endpoints: (builder) => ({

        getData: builder.query({
            query: (_) => ``
        }),

        addUser: builder.mutation({
            query: user => ({
                url: '',
                method: 'POST',
                body: user
            })
        }),

        updateUser: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/${id}`,
                method: 'PUT',
                body: rest
            })
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE'
            })
        })
    })
});


export const {
    useGetDataQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = testApi;
