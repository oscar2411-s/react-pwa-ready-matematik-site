import React from "react";
import { Link } from "react-router-dom";
import "./Element.css";

class Element extends React.Component {
  render() {
    return (
      <Link to={this.props.to} className="element" style={this.props.color}>
        <i className="fas fa-angle-right icon"></i>
        <h2>{this.props.elementtitel}</h2>
      </Link>
    );
  }
}
export default Element;
