import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './sass/main.css'
import SharedLayout from './components/SharedLayout'
import Home from './pages/MainLaunchPad/LaunchPad';
import LaunchProject from './pages/LaunchForm/StepperForm';
import LaunchProjectSecond from './pages/LaunchForm/EditPageForm';
import Project from './pages/PreSale/PreSaleAfterLaunch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/launchProjectSecond' element={<LaunchProjectSecond />} />
            <Route path='/:projectID' element={<Project />} />
          </Route>
          <Route path='/launchProject' element={<LaunchProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
