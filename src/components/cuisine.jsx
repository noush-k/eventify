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
                  Indian cuisine is renowned for its bold and complex flavors,
                  spices, and aromas
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
                  It is characterized by its emphasis on fresh ingredients,
                  delicate flavors, and artistic presentation
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
                  Italian cuisine is known for its fresh and flavorful
                  ingredients and regional culinary specialties.
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
                  Vegan food is plant-based and excludes all animal products,
                  offering delicious and healthy alternatives
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
                  Cocktails are mixed drinks containing two or more ingredients,
                  typically including alcohol and served chilled.
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
