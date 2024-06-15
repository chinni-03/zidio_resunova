// import React from "react";

// export default function CustomForm({details}) {

//     const renderFormFields = () => {
//         return Object.keys(details).map((key, index) => {
//           if (key === 'title' || key === 'subtitle') {
//             if (key === 'subtitle') {
//                 return <p className="subtitle" key={index}>{details[key]}</p>;
//             }
//             return <p className="title" key={index}>{details[key]}</p>;
//           }
          
//           const isLinkField = key === 'portfolio' || key === 'ghub' || key === 'linkedin';

//           return (
//             <div key={index} className="inputs">
//               <label htmlFor={key} className="resume-label">{details[key]}</label>
//               <input className="resume-input" type={isLinkField ? 'url' : 'text'} id={key} name={key} placeholder={details[key]} />
//             </div>
//           );
//         });
//       };

//     return (
//         <>
//         <div className="form">
//             {renderFormFields()}
//         </div>
//         </>
//     )
// }