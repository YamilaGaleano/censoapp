import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ocupaciones: []
}

export const ocupacionSlice = createSlice({
    name: "ocupaciones",
    initialState,
    reducers: {
        guardarOcupaciones: (state, action) => {
            state.ocupaciones = action.payload
        }
    }
})

export const { guardarOcupaciones } = ocupacionSlice.actions;

export default ocupacionSlice.reducer;