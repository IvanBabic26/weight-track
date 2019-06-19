import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import CalorieCalculator from "./components/CalorieCalculator/CalorieCalculator";
import NutritionValue from "./components/NutritionValues/NutritionValue";
import DisplayCase from "./components/DisplayCase/DisplayCase";
import TrainingLog from "./components/TrainingLog/TrainingLog";
import BackToTop from "./components/BackTo/BackToTop";
// import BackToPrevious from "./components/BackTo/BackToPrevious";
// import background from "./background.png";

export default function App() {
  
  return (
    <BrowserRouter>
    {/* TODO:extract to a component */}
    <div className="headerBar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/bmiCalculator">BMI Calculator</NavLink>
        <NavLink to="/calorieCalculator">Calorie Calculator</NavLink>
        <NavLink to="/nutritionValue">Nutrition Value</NavLink>
        <NavLink to="/trainingLog">Training Log</NavLink>
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/bmiCalculator" component={BMICalculator} />
        <Route path="/calorieCalculator" component={CalorieCalculator} />
        <Route path="/nutritionValue" component={NutritionValue} />
        <Route path="/trainingLog" component={TrainingLog} />
        <Route path="/displayCase/:id" component={DisplayCase} />
      </Switch>
    
      {/* <img src={background} alt="bgpicture" /> */}
    
      {/* TODO:extract to a component */}
      <div className="footerBar">
        <NavLink to="/bmiCalculator">BMI Calculator</NavLink>
        <NavLink to="/calorieCalculator">Calorie Calculator</NavLink>
        <NavLink to="/home">Home</NavLink>
      </div>
      {/* <BackToPrevious /> */}
      <BackToTop />
    </BrowserRouter>
  );
}
