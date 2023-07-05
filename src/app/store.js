import { configureStore } from "@reduxjs/toolkit";


import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,

    },
    // this middleware does not worke 
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(cryptoApi.middleware)
    //     // , getDefaultMiddleware().concat(cryptoNewsApi.middleware)
    // }
    // this is my solution to fix this bug
    middleware:
        (getdefaultMiddleware) =>
            getdefaultMiddleware()
                .concat([
                    cryptoApi.middleware,
                    cryptoNewsApi.middleware
                ])
});



