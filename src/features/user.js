import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullname: '',
    email: '',
    birthday: '',
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setFullname(state, action) {
            state.fullname = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setBirthday(state, action) {
            state.birthday = action.payload
        },
        
    }
})
export const { login } = userSlice.actions 
export default userSlice.reducer