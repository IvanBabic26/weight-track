import React, { Component } from "react";
import "./CalorieCalculator.css";
import { activityLevel } from "../EnvFiles/Calorie";

export default class CalorieCalculator extends Component {
  state = {
    name: "",
    age: "",
    weight: "",
    height: "",
    sex: "male",
    activity: activityLevel,
    formComplete: false
  };

  change = (e, name) => {
    e.preventDefault();
    
    this.setState({ [name]: e.target.value });
  };

  calculateCalories = () => {
    const sexIndex = this.state.sex === "male" ? 5 : -161;
    const activity = activityLevel[this.state.activity];

    // TODO:izvuci u const i return const
    return (
      (10 * this.state.weight +
        6.25 * this.state.height -
        5 * this.state.age +
        sexIndex) *
      activity
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
    const { name, age, weight, height } = this.state;
    const isEnabled =
      name.length > 0 &&
      age.length > 0 &&
      height.length > 0 &&
      weight.length > 0;

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
                required
              />
              <label>Enter your age:</label>
              <input
                className="inputNumber"
                type="number"
                min="0"
                max="99"
                name="age"
                value={this.state.age}
                onChange={e => this.change(e, "age")}
                required
              />
              <label>Sex:</label>
              <select
                value={this.state.sex}
                onChange={e => this.change(e, "sex")}
                className="selectOption"
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label>Enter your height in cm:</label>
              <input
                className="inputNumber"
                type="number"
                min="20"
                max="250"
                name="height"
                value={this.state.height}
                onChange={e => this.change(e, "height")}
                required
              />
              <label>Enter your weight in kg:</label>
              <input
                className="inputNumber"
                type="number"
                min="0"
                max="300"
                name="weight"
                value={this.state.weight}
                onChange={e => this.change(e, "weight")}
                required
              />
              <label>Activity level:</label>
              <select
                value={this.state.activity}
                onChange={e => this.change(e, "activity")}
                className="selectOptionActivity"
              >
                {/* TODO:extract to array/obejct */}
                <option value="sedentary">
                  Sedentary lifestyle (little or no exercise)
                </option>
                <option value="slightlyActive">
                  Slightly active lifestyle (light exercise or sports 1-2
                  days/week)
                </option>
                <option value="moderatelyActive">
                  Moderately active lifestyle (moderate exercise or sports 2-3
                  days/week)
                </option>
                <option value="veryActive">
                  Very active lifestyle (hard exercise or sports 4-5 days/week)
                </option>
                <option value="extraActive">
                  Extra active lifestyle (very hard exercise, physical job or
                  sports 6-7 days/week)
                </option>
                <option value="professional">Professional athlete</option>
              </select>
              <label>Calorie away!</label>
              <input
                type="submit"
                className="btnSubmit"
                value="Submit"
                disabled={!isEnabled}
              />
            </form>
          </div>
        </div>
        <div className="mealTextWrapper">
          <h1 className="mealPlanHeader">Calories in Foods</h1>

          <p className="mealIntro">
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
          </p>
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
          {this.state.formComplete && (
            <div className="weightChange">
              <h4>CALORIE TABLE</h4>
              <div
                id="lineTop"
                className="calorieResult"
              >{`Maintain weight: ${this.calculateCalories()} kcal/day`}</div>
              <div>
                <div id="lineTop" className="calorieResult">
                  {`Mild weight loss (~0.25 kg/week): ${this.calculateCalories() -
                    250} kcal/day`}
                </div>
              </div>
              <div>
                <div
                  id="lineTop"
                  className="calorieResult"
                >{`Weight loss (~0.5 kg/week): ${this.calculateCalories() -
                  500} kcal/day`}</div>
              </div>
              <div>
                <div id="lineTop" className="calorieResult">
                  {`Extreme weight loss (~1 kg/week): ${this.calculateCalories() -
                    1000} kcal/day`}
                </div>
              </div>
              <div>
                <div id="lineTop" className="calorieResult">
                  {`Mild weight gain (~0.25 kg/week): ${this.calculateCalories() +
                    250} kcal/day`}
                </div>
              </div>
              <div>
                <div id="lineTop" className="calorieResult">
                  {`Weight gain (~1 kg/week): ${this.calculateCalories() +
                    500} kcal/day`}
                </div>
              </div>
              <div>
                <div id="lineTop" className="calorieResult">
                  {`Extreme weight gain (~1 kg/week): ${this.calculateCalories() +
                    1000} kcal/day`}
                </div>
                <div id="lineTop" className="calorieResult" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
