import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import pic1 from "../images/dev3.jpg";

function MainPage() {
  return (
    <div>
      <div>
        <h1 className="logo">eventify.</h1>
      </div>
      <div className="navbar-container">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="card" style={{ width: "18rem" }}>
              <img src={pic1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Pick Venue</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/venue" style={{ textDecoration: "none" }}>
                  <button className="b1">
                    <a href="#" class="btn btn-primary"></a>
                    Go Somewhere
                  </button>
                </Link>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={pic1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Pick Caterer</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b2">
                  <a href="#" class="btn btn-primary"></a>
                  Go Somewhere
                </button>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={pic1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Invite Guests</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b3">
                  <a href="#" class="btn btn-primary"></a>
                  Go Somewhere
                </button>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={pic1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Invite Guests</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b4">
                  <a href="#" class="btn btn-primary"></a>
                  Go Somewhere
                </button>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={pic1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Invite Guests</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b5">
                  <a href="#" class="btn btn-primary"></a>
                  Go Somewhere
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
