import { createContext, useContext } from "react";

const PersonalContext = createContext();
export const usePersonal = ()=>{
    const value = useContext(PersonalContext);
    return value;
}

export const PersonalProvider = ({children})=>{
    return(
        <PersonalContext.Provider>
            {children}
        </PersonalContext.Provider>
    )
}