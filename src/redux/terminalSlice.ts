import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {isVisible} from "@testing-library/user-event/dist/utils";

interface terminalState {
    isVisible: boolean
}

const initialState: terminalState = {
    isVisible: false
}

export const terminalSlice = createSlice({
    name: 'terminal',
    initialState,
    reducers: {
        changeVisible: (state) =>{
            if (state.isVisible){
                state.isVisible = false
            } else state.isVisible = true
        }
    }
})

export const {changeVisible} = terminalSlice.actions

export default terminalSlice.reducer