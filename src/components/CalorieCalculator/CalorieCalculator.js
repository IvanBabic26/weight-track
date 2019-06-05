import React, { Component } from "react";
import "./CalorieCalculator.css";

class CalorieCalculator extends Component {
  state = {
    name: "",
    age: "",
    weight: "",
    height: "",
    sex: "male",
    calories: "",
    message: "",
    formComplete: false
  };

  change = (e, name) => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
  };

  calculateCalories = () => {
    const sexIndex = this.state.sex === "male" ? 5 : -161;

    return (
      10 * this.state.weight +
      6.25 * this.state.height -
      5 * this.state.age +
      sexIndex
    );
  };

  submitForm = e => {
    e.preventDefault();
    this.calculateCalories();
    this.setState({
      formComplete: true
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="mealPlan">
        <div className="mealPlanWrapper">
          <div className="calorieCalc">
            <div className="calorieHeader">
              <h2>Calorie Calculator</h2>
            </div>
            <form id="formCalorie" onSubmit={this.submitForm}>
              <label>Please enter your name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.change(e, "name")}
              />
              <label>Enter your age:</label>
              <input
                type="text"
                name="age"
                value={this.state.age}
                onChange={e => this.change(e, "age")}
              />
              <label>Sex:</label>
              <select
                value={this.state.sex}
                onChange={e => this.change(e, "sex")}
                className="selectOption"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label>Enter your height in cm:</label>
              <input
                type="text"
                name="height"
                value={this.state.height}
                onChange={e => this.change(e, "height")}
              />
              <label>Enter your weight in kg:</label>
              <input
                type="text"
                name="weight"
                value={this.state.weight}
                onChange={e => this.change(e, "weight")}
              />
              <label>Calorie away!</label>
              <input type="submit" className="btnSubmit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="mealTextWrapper">
          <h1 className="mealPlanHeader">Calories in Foods</h1>

          <div className="mealIntro">
            The food you purchase may come with a nutrition label, but labels
            aren’t always easy to understand. This nutritional information,
            however, is essential in maintaining a balanced diet and healthy
            lifestyle, and with Weight Track, your days of wondering are over!
            Weight Track offers easy-to read calorie charts that break down the
            foods you eat, showing exactly what fats, carbs and protein make up
            the calories you’re absorbing. Once you understand the nutrient
            facts and calories in the foods you consume, you can take one step
            further and understand which energy sources and foods will meet your
            specific needs. Better yet, Weight Track will connect your food and
            fitness, showing approximately how long it takes to walk, run, or
            bike off the number of calories you’ve eaten. A nutrition label
            certainly can’t do that!
          </div>
          <h2 className="outputHeader">
            Try our calorie calculator and see the results below:
          </h2>
          {this.state.formComplete && (
            <div className="outputCalories">
              {`Hello ${
                this.state.name
              }! Your daily input of calories is currently at ${this.calculateCalories()} kcal/day!`}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CalorieCalculator;
