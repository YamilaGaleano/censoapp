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
            state.personas.push(action.payload)
        },
        listaPersonas:(state, action)=>{
            state.personasUsuario=action.payload
        },
        totalPersonas:(state, action)=>{
            state.personasTotal=action.payload
        },
        eliminarPersona:(state,action)=>{
            state.personas = state.personas.filter(persona => persona.id !== action.payload)
        }
    }
})

export const { guardarPersonas, listaPersonas, totalPersonas,eliminarPersona } = personaSlice.actions;

export default personaSlice.reducer;