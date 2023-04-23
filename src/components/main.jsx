import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import pic1 from "../images/ven6.jpeg";
import pic2 from "../images/food.jpeg";
import pic3 from "../images/invites.jpeg";

function MainPage() {
  return (
    <div>
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
                    See Options
                  </button>
                </Link>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={pic2} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Pick Cuisine</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/cuisine" style={{ textDecoration: "none" }}>
                  <button className="b2">
                    <a href="#" class="btn btn-primary"></a>
                    See Options
                  </button>
                </Link>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={pic3} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Invite Guests</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/invite" style={{ textDecoration: "none" }}>
                  <button className="b3">
                    <a href="#" class="btn btn-primary"></a>
                    Invite
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
