import { createContext, useContext, useState } from "react";

const ExperienceContext = createContext();
export const useExperience = ()=>{
    const value = useContext(ExperienceContext);
    return value
}

export const ExperienceProvider = ({children})=>{
    const [experienceData, setExperienceData] = useState([
        {
            
        }
    ])
    return(
        <ExperienceContext.Provider>
            {children}
        </ExperienceContext.Provider>
    )
}