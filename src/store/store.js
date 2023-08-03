import { configureStore } from "@reduxjs/toolkit";
import ocupacionReducer from "../features/ocupacionSlice";
import departamentoReducer  from "../features/departamentoSlice";
export const store = configureStore({
    reducer:{
        departamentos:departamentoReducer,
        ocupaciones:ocupacionReducer
    }
})