import { configureStore } from "@reduxjs/toolkit";


import swiperView from "../feature/SwiperView/SwiperView"

export const store = configureStore({
    reducer:swiperView
})