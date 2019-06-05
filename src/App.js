import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import CalorieCalculator from "./components/CalorieCalculator/CalorieCalculator";

function App() {
  return (
    <BrowserRouter>
      <div className="headerbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/bmicalculator">BMI Calculator</NavLink>
        <NavLink to="/caloriecalculator">Calorie Calculator</NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/bmicalculator" component={BMICalculator} />
          <Route path="/caloriecalculator" component={CalorieCalculator} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
