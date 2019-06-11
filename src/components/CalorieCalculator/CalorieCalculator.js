import React, { Component } from "react";
import "./CalorieCalculator.css";

const activityLevel = {
  sedentary: 1.2,
  slightlyactive: 1.4,
  moderatelyactive: 1.6,
  veryactive: 1.75,
  extraactive: 2,
  professional: 2.3
};

export default class CalorieCalculator extends Component {
  state = {
    name: "",
    age: "",
    weight: "",
    height: "",
    sex: "male",
    activity: "sedentary",
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
    let activity = activityLevel[this.state.activity];

    // console.log(activityLevel[activity]);

    // switch (activity) {
    //   case "slightlyactive":
    //     activity = 1.4;
    //     break;
    //   case "moderatelyactive":
    //     activity = 1.6;
    //     break;
    //   case "veryactive":
    //     activity = 1.75;
    //     break;
    //   case "extraactive":
    //     activity = 2;
    //     break;
    //   case "professional":
    //     activity = 2.3;
    //     break;
    //   default:
    //     activity = 1.2;
    //     break;
    // }

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
              <label>Activity level:</label>
              <select
                value={this.state.activity}
                onChange={e => this.change(e, "activity")}
                className="selectOptionActivity"
              >
                <option value="sedentary">
                  Sedentary lifestyle (little or no exercise)
                </option>
                <option value="slightlyactive">
                  Slightly active lifestyle (light exercise or sports 1-2
                  days/week)
                </option>
                <option value="moderatelyactive">
                  Moderately active lifestyle (moderate exercise or sports 2-3
                  days/week)
                </option>
                <option value="veryactive">
                  Very active lifestyle (hard exercise or sports 4-5 days/week)
                </option>
                <option value="extraactive">
                  Extra active lifestyle (very hard exercise, physical job or
                  sports 6-7 days/week)
                </option>
                <option value="professional">Professional athlete</option>
              </select>
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
          {this.state.formComplete && (
            <div className="weightChange">
              <div>{`Maintain weight: ${this.calculateCalories()} kcal/day`}</div>
              <div>
                <div>
                  {`Mild weight loss: ${this.calculateCalories()  - 250} kcal/day`}
                </div>
                <div>~0.25 kg/week</div>
              </div>
              <div>
                <div>{`Weight loss: ${this.calculateCalories() - 500} kcal/day`}</div>
                <div>~0.5 kg/week</div>
              </div>
              <div>
                <div>
                  {`Extreme weight loss: ${this.calculateCalories() - 1000} kcal/day`}
                </div>
                <div>~1 kg/week</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
