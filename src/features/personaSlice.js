import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personas: []
}

export const personaSlice = createSlice({
    name: "personas",
    initialState,
    reducers: {
        guardarPersonas: (state, action) => {
            state.personas = action.payload
        }
    }
})

export const { guardarPersonas } = personaSlice.actions;

export default personaSlice.reducer;