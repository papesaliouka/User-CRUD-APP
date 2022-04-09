import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import {setupListeners} from "@reduxjs/toolkit/dist/query";

import {testApi} from './services/api.service';

export const store = configureStore({
    reducer: {
        [testApi.reducerPath]: testApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(testApi.middleware),
})

setupListeners(store.dispatch)
