import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const useProject = ()=>{
    const value = useContext(ProjectContext);
    return value;
}

export const ProjectProvider = ({children})=>{
    const [projectData, setProjectData] = useState([
        {
            title:"",
            startyear:null,
            startmonth:null,
            endyear:null,
            endmonth:null,
            company:"",
            description:""
        }
    ]);

    
    return(
        <ProjectContext.Provider>
            {children}
        </ProjectContext.Provider>
    )
}