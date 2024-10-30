import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Mir Hussain',
    email: 'ahmedmihad962@gmail.com',
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        
    }
})

export default userSlice.reducer;