import React from "react";

import "./Category.css";

class Category extends React.Component {
  render() {
    return (
      <div className="tool">
        <div className="bobel"></div>
        <h2 className="tool-titel">{this.props.titel}</h2>
      </div>
    );
  }
}

export default Category;
