import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personas: [],
    personasUsuario: [],
    personasTotal:0
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
            state.personasUsuario=action.payload
        },
        totalPersonas:(state, action)=>{
            state.personasTotal=action.payload
        }
    }
})

export const { guardarPersonas, listaPersonas, totalPersonas } = personaSlice.actions;

export default personaSlice.reducer;