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
                  Set the tone of your event right by picking the best venue
                  from our handpicked choices
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
                  Choose from popular cuisines to make sure your guests have a
                  meal they'll always remember
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
                  Add invitees to your RSVP without the hassle of having to send
                  and manage invite responses
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
