import React, { useState } from "react";
import "./Katete.css";
import { Link } from "react-router-dom";

function Katete() {
  const [c, setC] = useState(null);
  const [b, setB] = useState(null);

  return (
    <div>
      <div className="tekst-container">
        <Link to="/matematik/pythagoras" className="link">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h2 className="titel">Katete</h2>
      </div>
      <form className="input-container">
        <div className="input-label">
          <label htmlFor="a">C:</label>
          <input
            type="number"
            required
            min="0"
            id="a"
            name="a"
            value={c}
            onInput={(e) => setC(e.target.value)}
          />
        </div>
        <div className="input-label">
          <label htmlFor="b">B:</label>
          <input
            type="number"
            required
            min="0"
            id="b"
            name="b"
            value={b}
            onInput={(e) => setB(e.target.value)}
          />
        </div>
        <label className="label">
          {"Resultat: " + Math.sqrt(c * c - b * b)}
        </label>
      </form>
    </div>
  );
}

export default Katete;
