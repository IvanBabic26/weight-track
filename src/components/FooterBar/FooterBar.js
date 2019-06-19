import React from "react";
import "./FooterBar.css";
import { NavLink } from "react-router-dom";

export default class FooterBar extends React.Component {
  render() {
    return (
      <div className="footerBar">
        <NavLink to="/bmiCalculator">BMI Calculator</NavLink>
        <NavLink to="/calorieCalculator">Calorie Calculator</NavLink>
        <NavLink to="/home">Home</NavLink>
      </div>
    );
  }
}
