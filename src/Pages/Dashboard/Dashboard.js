import React from "react";
import "./Dashboard.css";
import Element from "../../Components/Element/Element";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="board">
        <div className="element-container">
          <Element
            to="/matematik"
            elementtitel="Matematik"
            color={{ backgroundColor: "#09f" }}
          />
          <Element to="/" elementtitel="Betaer" />
          <Element
            to="/om"
            elementtitel="Om"
            color={{ backgroundColor: "#46c744" }}
          />
          <Element
            to="/om"
            elementtitel="Om"
            color={{ backgroundColor: "red" }}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
