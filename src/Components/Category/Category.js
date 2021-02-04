import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

class Category extends React.Component {
  render() {
    return (
      <Link className="tool" to={this.props.to}>
        <div className="bobel"></div>
        <h2 className="tool-titel">{this.props.titel}</h2>
      </Link>
    );
  }
}

export default Category;
