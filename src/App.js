import "./App.css";
import React from "react";
import LoginPage from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import MainPage from "./components/main";
import SignupPage from "./components/signup";
import VenuePage from "./components/venue";
import GuestList from "./components/guestlist";
import Cuisine from "./components/cuisine";
import InvitePage from "./components/invite";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/venue" element={<VenuePage />} />
          <Route path="/guestlist" element={<GuestList />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/invite" element={<InvitePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
