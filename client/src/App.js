import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import { Signup } from './components/Signuppage/Signup';
import { FormProvider } from './context/Form';

function App() {
  return (
      <div>
      <FormProvider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        </FormProvider>
      </div>
  );
}

export default App;
