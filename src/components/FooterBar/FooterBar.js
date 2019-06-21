import React from "react";
import "./FooterBar.css";
import { NavLink } from "react-router-dom";

export default class FooterBar extends React.Component {
  render() {
    return (
      <div className="footerBar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/nutritionValue">Food Search</NavLink>
        <NavLink to="/userLog">User Log</NavLink>
      </div>
    );
  }
}
