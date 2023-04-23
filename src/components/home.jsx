import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function HomePage() {
  return (
    <div>
      <div className="navbar-container">
        <h1 className="logo1">eventify.</h1>
      </div>
      <div className="home">
        <h2 className="home-subtitle">
          simplify and enjoy your event to the fullest
        </h2>
      </div>
      <Link to="/main" style={{ textDecoration: "none" }}>
        <button className="home-button">
          <a href="#" class="btn btn-primary"></a>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
