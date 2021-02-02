import React from "react";
import { Link } from "react-router-dom";
import Category from "../../Components/Category/Category";
import "./CategoryPage.css";

class CategoryPage extends React.Component {
  render() {
    return (
      <div>
        <div className="tekst-container">
          <Link to="/" className="link">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h2 className="titel">Kategorier</h2>
        </div>
        <div className="container">
          <Category titel="Pythagoras" />
          <Category titel="Fibonacci" />
          <Category titel="Pythagoras" />
          <Category titel="Fibonacci" />
          <Category titel="Pythagoras" />
          <Category titel="Fibonacci" />
        </div>
      </div>
    );
  }
}

export default CategoryPage;
