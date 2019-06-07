import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import CalorieCalculator from "./components/CalorieCalculator/CalorieCalculator";
import NutritionValue from "./components/NutritionValues/NutritionValue";
import DisplayCase from "./components/DisplayCase/DisplayCase";

function App() {
  return (
    <BrowserRouter>
      <div className="headerbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/bmicalculator">BMI Calculator</NavLink>
        <NavLink to="/caloriecalculator">Calorie Calculator</NavLink>
        <NavLink to="/nutritionvalue">Nutrition Value</NavLink>
      </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/bmicalculator" component={BMICalculator} />
          <Route path="/caloriecalculator" component={CalorieCalculator} />
          <Route path="/nutritionvalue" component={NutritionValue} />
          <Route path="/displaycase" component={DisplayCase} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
