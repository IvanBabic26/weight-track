import React from "react";
import "./HeaderBar.css";
import { NavLink } from "react-router-dom";

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div className="headerBar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/bmiCalculator">BMI Calculator</NavLink>
        <NavLink to="/calorieCalculator">Calorie Calculator</NavLink>
        <NavLink to="/nutritionValue">Nutrition Value</NavLink>
        <NavLink to="/trainingLog">Training Log</NavLink>
        <NavLink to="/userLog">User Log</NavLink>
      </div>
    );
  }
}
