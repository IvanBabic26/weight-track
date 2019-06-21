import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import CalorieCalculator from "./components/CalorieCalculator/CalorieCalculator";
import NutritionValue from "./components/NutritionValues/NutritionValue";
import DisplayCase from "./components/DisplayCase/DisplayCase";
import TrainingLog from "./components/TrainingLog/TrainingLog";
import UserLog from "./components/UserLog/UserLog";
import BackToTop from "./components/BackTo/BackToTop";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import FooterBar from "./components/FooterBar/FooterBar";

export default function App() {
  return (
    <BrowserRouter>
    <Route component={ScrollToTop} />
      <HeaderBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/bmiCalculator" component={BMICalculator} />
        <Route path="/calorieCalculator" component={CalorieCalculator} />
        <Route path="/nutritionValue" component={NutritionValue} />
        <Route path="/trainingLog" component={TrainingLog} />
        <Route path="/displayCase/:id" component={DisplayCase} />
        <Route path="/userLog" component={UserLog}/>
      </Switch>
      <FooterBar />
      <BackToTop />
    </BrowserRouter>
  );

}
  const ScrollToTop = () => {
    window.scrollTo(0,0);
    return null

}
