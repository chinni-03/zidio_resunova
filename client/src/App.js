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
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Feedback1 from './components/Feedback/Feedback1';
import Feedback2 from './components/Feedback/Feedback2';
import { DashboardProvider } from './context/dashboard';
import { FeedbackProvider } from './context/feedback';
import { PersonalProvider } from './context/resumeContext/personal_details';

function App() {
  return (
      <div>
      <FormProvider>
        <DashboardProvider>
          <FeedbackProvider>
            <PersonalProvider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/personal-details/:resumeType" element={<PersonalDetails />} />
          <Route path="/education-details" element={<EduDetails />} />
          <Route path="/experience-details" element={<ExpDetails />} />
          <Route path="/skills" element={<SkillDetails />} />
          <Route path="/awards" element={<AwardDetails />} />
          <Route path="/add-section" element={<Add />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback1 />} />
          <Route path="/feedback-submitted" element={<Feedback2 />} />
        </Routes>
        </PersonalProvider>
        </FeedbackProvider>
        </DashboardProvider>
      </FormProvider>
      </div>
  );
}

export default App;
