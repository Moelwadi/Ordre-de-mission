import React from "react";
import "./index.css"; // optional external CSS if needed

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
    <div className="list-order">
      <table className="list-order-table">
        <thead className="list-order-thead">
          <tr>
            <th>Lieu</th>
            <th>Date</th>
            <th>Personne rencontrée</th>
            <th>Objectif</th>
            <th>État</th>
            <th>Approbation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr className="list-order-row" key={index}>
              <td>{entry.lieu}</td>
              <td>{entry.date}</td>
              <td>{entry.person}</td>
              <td>{entry.objectif}</td>
              <td>{entry.etat}</td>
              <td>
                {entry.approved ? (
                  <span className="list-order-approved">✔️ Approuvé</span>
                ) : (
                  //TODO: fix roles
                  //!only hr and hr supervisor;
                  <button
                    className="list-order-approve-btn"
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
