import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import { Signup } from './components/Signuppage/Signup';
import { FormProvider } from './context/Form';
import Signin from './components/Signinpage/Signin';

function App() {
  return (
      <div>
      <FormProvider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        </FormProvider>
      </div>
  );
}

export default App;
