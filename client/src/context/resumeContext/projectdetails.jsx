import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

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

    const handleOnChange = (index, e)=>{
        const updateProject = [...projectData];
        updateProject[index]={
            ...updateProject[index],
            [e.target.name]: e.target.value
        }
        setProjectData(updateProject);
    }
    
    const handleSubmitProject = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("/project/create",{projectData},
                {headers:{
                    "Authorization": `Bearer ${token}`
                }}
            );
            if(response.status === 200){
                toast.success("your details updated successfully!!");
                setProjectData([{
                    title:"",
                    startyear:null,
                    startmonth:null,
                    endyear:null,
                    endmonth:null,
                    company:"",
                    description:""
                }])
            }else{
                toast.warn(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error in posting the project");
            console.log(error)
        }
    }

    return(
        <ProjectContext.Provider value={{handleOnChange, handleSubmitProject, projectData}}>
            {children}
        </ProjectContext.Provider>
    )
}