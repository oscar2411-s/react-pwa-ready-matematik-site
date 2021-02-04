import React, { useState } from "react";
import "./Hypotenuse.css";
import { Link } from "react-router-dom";

function Hypotenuse() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);

  return (
    <div>
      <div className="tekst-container">
        <Link to="/matematik/pythagoras" className="link">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h2 className="titel">Hypotenuse</h2>
      </div>
      <form className="input-container">
        <div className="input-label">
          <label htmlFor="a">A:</label>
          <input
            type="number"
            required
            min="0"
            id="a"
            name="a"
            value={a}
            onInput={(e) => setA(e.target.value)}
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
          {"Resultat: " + Math.sqrt(a * a + b * b)}
        </label>
      </form>
    </div>
  );
}

export default Hypotenuse;
