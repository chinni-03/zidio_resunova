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
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Feedback1 from './components/Feedback/Feedback1';
import Feedback2 from './components/Feedback/Feedback2';
import { DashboardProvider } from './context/dashboard';
import { FeedbackProvider } from './context/feedback';
import { PersonalProvider } from './context/resumeContext/personal_details';
import { EducationProvider } from './context/resumeContext/education_details';
import About from './components/About/About';
import { ExperienceProvider } from './context/resumeContext/experience_details';
import ProjectDetails from './components/Builder/ProjectDetails';
import { ProjectProvider } from './context/resumeContext/projectdetails';
import Lastpage from './components/Lastpage/Lastpage';
import { SkillProvider } from './context/resumeContext/skilldetail';
import { AwardProvider } from './context/resumeContext/awardDetails';
import { ResumeDownloadProvider } from './context/ResumeDowload';

function App() {
  return (
      <div>
      <FormProvider>
        <DashboardProvider>
          <FeedbackProvider>
            <PersonalProvider>
              <EducationProvider>
                <ExperienceProvider>
                  <ProjectProvider>
                    <SkillProvider>
                      <AwardProvider>
                        <ResumeDownloadProvider>
                  <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/personal-details/:resumeType" element={<PersonalDetails />} />
                    <Route path="/education-details/:resumeType" element={<EduDetails />} />
                    <Route path="/experience-details/:resumeType" element={<ExpDetails />} />
                    <Route path="/skills/:resumeType" element={<SkillDetails />} />
                    <Route path="/awards/:resumeType" element={<AwardDetails />} />
                    <Route path="/project-details/:resumeType" element={<ProjectDetails />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/feedback" element={<Feedback1 />} />
                    <Route path="/feedback-submitted" element={<Feedback2 />} />
                    <Route path='/developers' element={<About />} />
                    <Route path='/download-resume' element={<Lastpage />} />
                  </Routes>
                  </ResumeDownloadProvider>
                  </AwardProvider>
                  </SkillProvider>
                  </ProjectProvider>
                </ExperienceProvider>
              </EducationProvider>
            </PersonalProvider>
          </FeedbackProvider>
        </DashboardProvider>
      </FormProvider>
      </div>
  );
}

export default App;
