import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import { Signup } from './components/Signuppage/Signup';
import { FormProvider } from './context/Form';
import PersonalDetails from './components/Builder/PersonalDetails';
import Signin from './components/Signinpage/Signin';
import ExpDetails from './components/Builder/ExpDetails';
import EduDetails from './components/Builder/EduDetails';
import SkillDetails from './components/Builder/SkillDetails';
import AwardDetails from './components/Builder/AwardDetails';
import Add from './components/Builder/Add';

function App() {
  return (
      <div>
      <FormProvider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/education-details" element={<EduDetails />} />
          <Route path="/experience-details" element={<ExpDetails />} />
          <Route path="/skills" element={<SkillDetails />} />
          <Route path="/awards" element={<AwardDetails />} />
          <Route path="/add-section" element={<Add />} />
        </Routes>
      </FormProvider>
      </div>
  );
}

export default App;
