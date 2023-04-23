import React from "react";
import "./guestlist.css";
import { Link } from "react-router-dom";

function GuestList() {
  //   const addToTable = () => {
  //     const name = document.querySelector(
  //       'input[type="text"][placeholder="Name"]'
  //     ).value;
  //     const email = document.querySelector(
  //       'input[type="text"][placeholder="Email"]'
  //     ).value;
  //     const status = document.querySelector(
  //       'input[type="text"][placeholder="Status"]'
  //     ).value;
  //     const table = document.querySelector("table");
  //     const row = document.createElement("tr");
  //     const nameCell = document.createElement("td");
  //     const emailCell = document.createElement("td");
  //     const statusCell = document.createElement("td");
  //     nameCell.innerHTML = name;
  //     emailCell.innerHTML = email;
  //     statusCell.innerHTML = status;
  //     row.appendChild(nameCell);
  //     row.appendChild(emailCell);
  //     row.appendChild(statusCell);
  //     table.appendChild(row);
  //   };
  return (
    <>
      <div>
        <Link to="/">
          <button className="go-to-main">
            <h1 className="logo">eventify.</h1>
          </button>
        </Link>
      </div>
      <h3 className="whitelist">WHITELIST</h3>
      <table>
        <thead>
          <tr>
            <th>
              <p className="c1">Name</p>
            </th>
            <th>Email</th>
            <th>Wallet</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default GuestList;
