import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link id="form-link" to="/">Section 1 (Layout Only)</Link></li>
          <li><Link id="form-ref-link" to="/ref">Section 2 (useRef)</Link></li>
          <li><Link id="form-state-link" to="/state">Section 3 (useState)</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ref" element={<FormRef />} />
        <Route path="/state" element={<FormState />} />
      </Routes>
    </div>
  );
}
