const { createContext, useContext, useState } = require("react");

const EducationContext = createContext();
export const useEducation = ()=>{
    const value = useContext(EducationContext);
    return value
}

export const EducationProvider = ({children})=>{
    return(
        <EducationContext.Provider>
            {children}
        </EducationContext.Provider>
    )
}