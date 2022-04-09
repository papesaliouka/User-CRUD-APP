import {createContext, useState} from "react";

import {useGetDataQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation} from './api.service'


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const {data, error, isLoading} = useGetDataQuery()

    return (
        <UserContext.Provider values={{
            data, error, isLoading
        }} >
            {children}
        </UserContext.Provider>
    )
}
