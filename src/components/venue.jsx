import React from "react";
import "./venue.css";
import pic1 from "../images/dev3.jpg";

function VenuePage() {
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
                <h5 class="card-title">Shangrila</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b1">
                  <a href="#" class="btn btn-primary"></a>
                  Go Somewhere
                </button>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={pic1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Unicornia</h5>
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
                <h5 class="card-title">Radisson Suites</h5>
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
                <h5 class="card-title">Jelly Beans</h5>
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
                <h5 class="card-title">Clandestine</h5>
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

export default VenuePage;
