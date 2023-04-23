import React from "react";
import "./venue.css";
//import pic1 from "../images/dev3.jpg";
import v1 from "../images/ven1.jpeg";
import v2 from "../images/ven2.png";
import v3 from "../images/ven3.jpeg";
import v4 from "../images/ven4.jpeg";
import v5 from "../images/ven5.jpeg";
import v6 from "../images/ven6.jpeg";

function VenuePage() {
  return (
    <div>
      <div className="navbar-container">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="card" style={{ width: "18rem" }}>
              <img src={v1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Shangrila</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b1">
                  <a href="#" class="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={v2} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Unicornia</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b2">
                  <a href="#" class="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={v3} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Radisson Suites</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b3">
                  <a href="#" class="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={v4} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Jelly Beans</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b4">
                  <a href="#" class="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img src={v5} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Clandestine</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="b5">
                  <a href="#" class="btn btn-primary"></a>
                  Select
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
