import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import CalorieCalculator from "./components/CalorieCalculator/CalorieCalculator";
import NutritionValue from "./components/NutritionValues/NutritionValue";
import DisplayCase from "./components/DisplayCase/DisplayCase";
import TrainingLog from "./components/TrainingLog/TrainingLog";
import house from "./components/img/house.png";

export default function App() {
  // state = {
  //   query: "",
  //   data: [],
  //   filteredData: []
  // };

  // handleInputChange = e => {
  //   const query = e.target.value;

  //   this.setState(prevState => {
  //     const filteredData = prevState.data.filter(element => {
  //       return element.name.toLowerCase().includes(query.toLowerCase());
  //     });

  //     return (
  //       query,
  //       filteredData
  //       );
  //     });
  //   };

  //   getData = () => {
  //     fetch(`http://localhost:3000`)
  //     .then(response => response.json())
  //     .then(data => {
  //       const { query } = this.state;
  //       const filteredData = data.filter(element => {
  //         return element.name.toLowerCase().includes(query.toLowerCase());
  //       });

  //       this.setState({
  //         data,
  //         filteredData
  //       });
  //     });
  //   };

  //   componentWillMount() {
  //     this.getData
  //   }
  return (
    <BrowserRouter>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon fill="white" points="0,100 100,0 100,100"/>
    </svg> */}
      <div className="headerbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/bmicalculator">BMI Calculator</NavLink>
        <NavLink to="/caloriecalculator">Calorie Calculator</NavLink>
        <NavLink to="/nutritionvalue">Nutrition Value</NavLink>
        <NavLink to="/traininglog">Training Log</NavLink>
        {/* <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div> */}
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/bmicalculator" component={BMICalculator} />
        <Route path="/caloriecalculator" component={CalorieCalculator} />
        <Route path="/nutritionvalue" component={NutritionValue} />
        <Route path="/traininglog" component={TrainingLog} />
        <Route path="/displaycase/:id" component={DisplayCase} />
      </Switch>
      <div className="footerBar">
        <NavLink to="/bmicalculator">BMI Calculator</NavLink>
        <NavLink to="/caloriecalculator">Calorie Calculator</NavLink>
        <NavLink to="/home">
          <img alt="house" src={house} />
        </NavLink>
      </div>
    </BrowserRouter>
  );
}
