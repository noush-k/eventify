import React from "react";
import { Link } from "react-router-dom";
import "./create.css";

function CreatePage() {
  return (
    <div>
      <div className="navbar-container">
        <h1 className="logo">eventify.</h1>
      </div>
      <div className="create">
        <h2 className="create-subtitle">create your event</h2>
      </div>
      <div className="create-form">
        <form>
          <label className="create-label" htmlFor="event-creator">
            Creator:
          </label>
          <input
            className="create-input"
            type="text"
            id="creator-name"
            name="creator-name"
            required
          />
          <br />
          <br />
          <label className="create-label" htmlFor="event-name">
            Event Name:
          </label>
          <input
            className="create-input"
            type="text"
            id="event-name"
            name="event-name"
            required
          />
          <br />
          <br />
          <label className="create-label" htmlFor="event-date">
            Event Date:
          </label>
          <input
            className="create-input"
            type="date"
            id="event-date"
            name="event-date"
            required
          />
          <br />
          <br />
          <label className="create-label" htmlFor="event-location">
            Ticket Price:
          </label>
          <input
            className="create-input"
            type="text"
            id="event-price"
            name="event-price"
            required
          />
          <br />
          <br />
          <label className="create-label" htmlFor="event-description">
            Event Description:
          </label>
          <input
            className="create-input"
            type="text"
            id="event-description"
            name="event-description"
            required
          />
          <br />
          <br />
          <Link to="/main">
            <button className="create-button">Next</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
