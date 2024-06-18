const { createContext, useContext } = require("react");

const EducationContext = createContext();
const useEducation = ()=>{
    const value = useContext(EducationContext);
    return value
}