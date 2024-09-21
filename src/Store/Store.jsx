import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import personReducer from "./reducers/PersonSlice";
import TvReducer from "./reducers/TvSlice";

export const store = configureStore({
    reducer:{
        movie: movieReducer,
        person: personReducer,
        tv: TvReducer,
    }
})