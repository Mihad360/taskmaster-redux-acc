import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './features/tasks/taskSlice'
import userSlice from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        taskSlice: taskSlice,
        userSlice: userSlice,
    },
})