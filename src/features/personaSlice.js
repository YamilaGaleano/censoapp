import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personas: [],


}

export const personaSlice = createSlice({
    name: "personas",
    initialState,
    reducers: {
        guardarPersonas: (state, action) => {
            //cambie el state.personas=action.payload
            state.personas.push(action.payload)
        },
        listaPersonas:(state, action)=>{
            state.personas=action.payload
        }
    }
})

export const { guardarPersonas, listaPersonas } = personaSlice.actions;

export default personaSlice.reducer;