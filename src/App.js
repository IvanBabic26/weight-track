import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import MealPlan from "./components/MealPlan/MealPlan";

function App() {
  return (
    <BrowserRouter>
      <div className="headerbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/bmicalculator">BMI Calculator</NavLink>
        <NavLink to="/mealplan">Meal Plan</NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/bmicalculator" component={BMICalculator} />
          <Route path="/mealplan" component={MealPlan} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
