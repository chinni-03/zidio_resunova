import { createContext, useContext, useRef } from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import axios from "axios";
import { toast } from "react-toastify";

const ResumeDownloadContext = createContext();

export const useResume = ()=>{
    const value = useContext(ResumeDownloadContext);
    return value
}

export const ResumeDownloadProvider = ({children})=>{
    const pdfRef = useRef();

    const downloadPdf = async ()=>{
        const input = pdfRef.current;
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true)
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imageWidth = canvas.width;
        const imageHeight = canvas.height;
        const ratio = Math.min(pdfWidth/imageWidth, pdfHeight/imageHeight);
        const imgX = (pdfWidth-imageWidth * ratio)/2
        const imageY = 5;
        pdf.addImage(imgData, 'PNG', imgX, imageY, imageWidth*ratio, imageHeight*ratio);
        pdf.save('invoice.pdf')
        const pdfblob = pdf.output('blob');
        return pdfblob
    }

    const sendPdfByEmail = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const pdfblob = await downloadPdf();
            const formdata = new FormData();
            formdata.append('file', pdfblob,'resume.pdf');
            const response = await axios.post('/user/send-resume',formdata,{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            });
            if(response.status === 200){
                toast.success("Resume sented on your mail too!")
            }
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return(
        <ResumeDownloadContext.Provider value={{pdfRef, sendPdfByEmail}}>
            {children}
        </ResumeDownloadContext.Provider>
    )
}