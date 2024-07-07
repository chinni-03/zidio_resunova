import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
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

    const [getProjectData, setGetProjectData] = useState([])

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
            const response = await axios.post("/project/create",{projectedata:projectData},
                {headers:{
                    "Authorization": `Bearer ${token}`
                }}
            );
            if(response.status === 200){
                toast.success("your details updated successfully!!");
                setProjectData([{
                    title:"",
                    startyear:"",
                    startmonth:"",
                    endyear:"",
                    endmonth:"",
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

    const fetchData = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`/project/view-all-detail`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setGetProjectData(response.data.getAllData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("Error fetching personal details", error);
        }
    };

    const deleteProjectDelete = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete("/project/delete",{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })
            if(response.status === 200){
                toast.success(response.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(()=>{fetchData()},[])
    return(
        <ProjectContext.Provider value={{handleOnChange, handleSubmitProject, projectData,getProjectData, deleteProjectDelete}}>
            {children}
        </ProjectContext.Provider>
    )
}