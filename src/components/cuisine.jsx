import React from "react";
import "./cuisine.css";
import v1 from "../images/cui1.jpeg";
import v2 from "../images/cui2.jpeg";
import v3 from "../images/cui3.jpeg";
import v4 from "../images/cui4.jpeg";
import v5 from "../images/cui5.jpeg";

function Cuisine() {
  return (
    <div>
      <div className="navbar-container">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="card" style={{ width: "18rem" }}>
              <img src={v1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Indian</h5>
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
                <h5 class="card-title">Oriental</h5>
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
                <h5 class="card-title">Italian</h5>
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
                <h5 class="card-title">Vegan</h5>
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
                <h5 class="card-title">Cocktails</h5>
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

export default Cuisine;
