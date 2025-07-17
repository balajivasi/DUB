import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: 'BalajiVasi@gmail.com',
    language: 'en',
    firstName: 'Balaji',
    lastName: 'Vasi',
    globalError: "",

}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileEmail: (state, action) => {
            state.email = action.payload
        },
        setProfileLanguage: (state, action) => {
            state.language = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setGlobalError: (state, action) => {
            state.globalError = action.payload;
        },
        setClearProfileData: (state) => {
            state.email = null;
            state.lastName = null;
            state.firstName = null;
            state.globalError = null;
        },

    }
})
export const { setGlobalError } = profileSlice.actions;
export default profileSlice.reducer;