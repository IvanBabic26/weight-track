import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import CalorieCalculator from "./components/CalorieCalculator/CalorieCalculator";
import NutritionValue from "./components/NutritionValues/NutritionValue";
import DisplayCase from "./components/DisplayCase/DisplayCase";
import TrainingLog from "./components/TrainingLog/TrainingLog";
import BackToTop from "./components/BackTo/BackToTop";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import FooterBar from "./components/FooterBar/FooterBar";
// import BackToPrevious from "./components/BackTo/BackToPrevious";
// import background from "./background.png";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/bmiCalculator" component={BMICalculator} />
        <Route path="/calorieCalculator" component={CalorieCalculator} />
        <Route path="/nutritionValue" component={NutritionValue} />
        <Route path="/trainingLog" component={TrainingLog} />
        <Route path="/displayCase/:id" component={DisplayCase} />
      </Switch>
      <FooterBar />
      <BackToTop />
    </BrowserRouter>
  );
}
