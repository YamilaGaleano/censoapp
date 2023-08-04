import { configureStore } from "@reduxjs/toolkit";
import ocupacionReducer from "../features/ocupacionSlice";
import departamentoReducer  from "../features/departamentoSlice";
import personasReducer from "../features/personaSlice";
export const store = configureStore({
    reducer:{
        departamentos:departamentoReducer,
        ocupaciones:ocupacionReducer,
        personas:personasReducer
    }
})