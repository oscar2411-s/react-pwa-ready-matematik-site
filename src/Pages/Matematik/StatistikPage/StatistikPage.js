import React from "react";
import Category from "../../../Components/Category/Category";
import { Link } from "react-router-dom";

function StatistikPage(props) {
  return (
    <div>
      <div className="tekst-container">
        <Link to="/matematik" className="link">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h2 className="titel">Statistik</h2>
      </div>
      <div className="container">
        <Category to="/matematik/statistik/tal-analyser" titel="tal-analyser" />
        <Category to="/matematik/statistik/diagram" titel="diagrammer" />
      </div>
    </div>
  );
}

export default StatistikPage;
