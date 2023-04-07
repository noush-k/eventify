import './App.css';
import React from 'react';
import LoginPage from './components/login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/home';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
