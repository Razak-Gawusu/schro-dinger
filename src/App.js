import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './sass/main.css'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home/Home';
import LaunchProject from './pages/LaunchProject/LaunchProject';
import LaunchProjectSecond from './pages/LaunchProject/LaunchProjectSecond';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/launchProjectSecond' element={<LaunchProjectSecond />} />
          </Route>
          <Route path='/launchProject' element={<LaunchProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
