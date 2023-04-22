import React from "react";

function GuestList() {
  const addToTable = () => {
    const name = document.querySelector(
      'input[type="text"][placeholder="Name"]'
    ).value;
    const email = document.querySelector(
      'input[type="text"][placeholder="Email"]'
    ).value;
    const status = document.querySelector(
      'input[type="text"][placeholder="Status"]'
    ).value;
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const statusCell = document.createElement("td");
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    statusCell.innerHTML = status;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(statusCell);
    table.appendChild(row);
  };
  return (
    <>
      <h3>WHITELIST</h3>
      <input type="text" placeholder="Name" />
      <br />
      <input type="text" placeholder="Email" />
      <br />
      <input type="text" placeholder="Status" />
      <br />
      <button onClick={addToTable}>Submit</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default GuestList;
