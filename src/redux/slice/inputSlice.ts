import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface formIp {
    userLink: string,
    viewAudio: boolean,
    errorMessage: boolean
}

const initialState: formIp = {
    userLink: '',
    viewAudio: true,
    errorMessage: false
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers:{
        setUserLink: (state, action: PayloadAction<string>) => {
            state.userLink = action.payload
        },
        setToForm: (state) => {
            state.userLink = '';
            state.viewAudio = true
            state.errorMessage = false
        },
        setClearError: (state, action) => {
             state.errorMessage = action.payload
        },
        setViewAudio: (state, action) => {
            state.viewAudio = action.payload
        },
        forwardForForm: (state) => {
            state.errorMessage = true
            state.viewAudio = true
        }
    }
})

export const {setUserLink, setToForm, setClearError, setViewAudio, forwardForForm} = inputSlice.actions
export default inputSlice.reducer;
