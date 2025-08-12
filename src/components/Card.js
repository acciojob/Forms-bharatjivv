import React from "react";

export default function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "20px auto",
      width: "300px",
      borderRadius: "8px",
      background: "#f9f9f9"
    }}>
      {children}
    </div>
  );
}
