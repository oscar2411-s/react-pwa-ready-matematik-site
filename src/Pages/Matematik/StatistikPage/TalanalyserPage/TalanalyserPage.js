import React, { useState } from "react";
import { Link } from "react-router-dom";

function TalanalyserPage() {
  const [input, setInput] = useState("");
  const ting = input.replace(/\s/g, "").replace(/,/g, "").split("").map(Number);

  const Tell = () => {
    var mindstevrdi = Math.min(...ting);
    var strstevrdi = Math.max(...ting);
    var total = 0;
    for (var i = 0; i < ting.length; i++) {
      total = total + ting[i];
    }
    console.log("Middel: " + total / ting.length);
    console.log("Mindsteværdi: " + mindstevrdi);
    console.log("Størsteværdi: " + strstevrdi);
  };

  return (
    <div>
      <div className="tekst-container">
        <Link to="/matematik/pythagoras" className="link">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h2 className="titel">Tal-analyser</h2>
      </div>
      <div className="input-container">
        <input onKeyUp={(e) => setInput(e.target.value)} />
        <button onClick={Tell}>Click</button>
      </div>
    </div>
  );
}

export default TalanalyserPage;
