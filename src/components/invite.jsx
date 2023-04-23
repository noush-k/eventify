import React from "react";
import "./invite.css";

function InvitePage() {
  return (
    <div>
      <div className="navbar-container">
        <h1 className="logo">eventify.</h1>
      </div>

      <form className="form" action="/send-invite" method="post">
        <label className="name" for="name">
          Name:
        </label>
        <input
          className="n-input"
          type="text"
          id="name"
          name="name"
          required
        ></input>
        <br></br>

        <label className="email" for="email">
          Email:
        </label>
        <input
          className="e-input"
          type="email"
          id="email"
          name="email"
          required
        ></input>
        <br></br>

        <label className="wallet" for="wallet">
          Wallet:
        </label>
        <input
          className="w-input"
          type="text"
          id="wallet"
          name="wallet"
          required
        ></input>
        <br></br>

        <input className="submit" type="submit" value="Send Invite"></input>
      </form>
    </div>
  );
}

export default InvitePage;
