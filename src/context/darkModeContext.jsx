import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
 
const INITIALSTATE ={
    darkMode: false
}

export const DarkModeContext = createContext(INITIALSTATE);

export const DarkModeContextProvider =({children}) => {
    const [state,dispatch] = useReducer(DarkModeReducer,INITIALSTATE);

    return <DarkModeContext.Provider value={{darkMode:state.darkMode,dispatch}}>
        {children}
        </DarkModeContext.Provider>
}