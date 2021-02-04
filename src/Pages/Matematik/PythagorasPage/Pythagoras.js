import React from "react";
import "./Pythagoras.css";
import { Link } from "react-router-dom";
import Category from "../../../Components/Category/Category";

class PythagorasPage extends React.Component {
  render() {
    return (
      <div>
        <div className="tekst-container">
          <Link to="/matematik" className="link">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h2 className="titel">Pythagoras</h2>
        </div>
        <div className="pythagoras-container">
          <Category to="/matematik/pythagoras/katete" titel="Katete" />
          <Category to="/matematik/pythagoras/hypotenuse" titel="Hypotenuse" />
        </div>
      </div>
    );
  }
}

export default PythagorasPage;
