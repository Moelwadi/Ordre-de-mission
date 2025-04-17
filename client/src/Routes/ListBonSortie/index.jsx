import React from "react";
import "./index.css";

const data = [
  {
    lieu: "Paris",
    date: "2025-04-15",
    person: "Jean Dupont",
    objectif: "Business Partnership",
    etat: "Pending",
    approved: false,
  },
  {
    lieu: "Lyon",
    date: "2025-04-10",
    person: "Claire Martin",
    objectif: "Client Onboarding",
    etat: "Completed",
    approved: true,
  },
  // Add more entries as needed
];

export default function () {
  const handleApprove = (index) => {
    console.log(`Approve clicked for row ${index}`);
    // Logic to update approval status can go here
  };

  return (
    <div className="list-bon-sortie">
      <table className="list-bon-sortie-table">
        <thead className="list-bon-sortie-thead">
          <tr>
            <th>nom</th>
            <th>fonction</th>
            <th>matrecule</th>
            <th>date</th>
            <th>destination</th>
            <th>etat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr className="list-bon-sortie-row" key={index}>
              <td>{entry.lieu}</td>
              <td>{entry.date}</td>
              <td>{entry.person}</td>
              <td>{entry.objectif}</td>
              <td>{entry.etat}</td>
              <td>
                {entry.approved ? (
                  <span className="list-bon-sortie-approved">✔️ Approuvé</span>
                ) : (
                  //TODO: fix roles
                  //!only hr and hr supervisor;
                  <button
                    className="list-bon-sortie-approve-btn"
                    onClick={() => handleApprove(index)}
                  >
                    Approuver
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
