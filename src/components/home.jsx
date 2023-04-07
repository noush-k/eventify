import React from "react";
//import { Link } from "react-router-dom";
import "./home.css";

function HomePage() {
  return (
    <div>
        <div className="navbar-container">
            <h1 className="logo">
                eventify.
            </h1>
        </div>
    <div className="home">
        <h2 className="home-subtitle">simplify and enjoy your event to the fullest</h2>
    </div>
    <button className="home-button">Get Started</button>
    </div>
  );
}

export default HomePage;