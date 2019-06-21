import React from "react";
import "./UserLog.css";
import info from "../img/info.png";
import bmi from "../img/bmi.png";
import burn from "../img/burn.png";
import gym from "../img/gym.png";

export default class UserLog extends React.Component {
  state = {
    name: "",
    age: "",
    sex: "Male",
    weight: "",
    height: "",
    bmi: "",
    message: "",
    optimalWeight: "",
    sports: "Adventure Sports",
    sportsActivity: "Kayaking"
  };

  componentDidMount() {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const sex = localStorage.getItem("sex");
    const height = localStorage.getItem("height");
    const weight = localStorage.getItem("weight");
    const bmi = localStorage.getItem("bmi");
    const message = localStorage.getItem("message");
    const optimalWeight = localStorage.getItem("optimalWeight");
    const calorieCounter = localStorage.getItem("calorieCounter");
    const met = localStorage.getItem("met");
    const caloriesTrain = localStorage.getItem("caloriesTrain");
    const duration = localStorage.getItem("Duration");
    const sports = localStorage.getItem("sports");
    const activity = localStorage.getItem("activity");

    this.setState({
      name,
      age,
      sex,
      height,
      weight,
      bmi,
      message,
      optimalWeight,
      calorieCounter,
      met,
      caloriesTrain,
      duration,
      sports,
      activity
    });
  }

  render() {
    const calorieCounter = parseInt(this.state.calorieCounter);
    return (
      <div className="userLog">
        <div className="userLogInfo">
          <img src={info} alt="info" />
          <h1>Basic Info</h1>
          <div>
            <div className="userLogResults">Name: {this.state.name}</div>
            <div>
              <div className="userLogResults">Age: {this.state.age}</div>
            </div>
            <div>
              <div className="userLogResults">Sex: {this.state.sex}</div>
            </div>
            <div>
              <div className="userLogResults">
                Height: {this.state.height} cm
              </div>
            </div>
            <div>
              <div className="userLogResults">
                Weight: {this.state.weight} kg
              </div>
            </div>
          </div>
        </div>
        <div className="bmiInfo">
          <img src={bmi} alt="bmi" />
          <h1>BMI</h1>
          <div>
            <div className="userLogResults">
              {`Your BMI is currently at ${this.state.bmi}.
        ${this.state.message}
        ${this.state.optimalWeight} kg`}
            </div>
          </div>
        </div>
        <div className="calorieInfo">
        <img src={burn} alt="burn" />
          <h1>Calories</h1>
          <div>
            <div className="userLogResults">
              Your Daily Calorie Input: {calorieCounter} kcal
            </div>
          </div>
         
          <div className="tableResults">
            <div>
            <div>
              Maintain Your Weight: {calorieCounter} kcal
            </div>
          </div>
          <div>
            <div className="topLineCal">
              Mild Weight Loss (~0.25 kg/week): {calorieCounter - 250} kcal
            </div>
          </div>
          <div>
            <div className="topLineCal">
            Weight Loss (~0.5 kg/week): {calorieCounter - 500} kcal
            </div>
          </div>
          <div>
            <div className="topLineCal">
            Extreme Weight Loss (~1 kg/week): {calorieCounter - 1000} kcal
            </div>
          </div>
          <div>
            <div className="topLineCal">
            Mild Weight Gain (~0.25 kg/week): {calorieCounter + 250} kcal
            </div>
          </div>
          <div>
            <div className="topLineCal">
            Weight Gain (~0.5 kg/week): {calorieCounter + 500} kcal
            </div>
          </div>
          <div>
            <div className="topLineCal">
            Extreme Weight Gain (~1 kg/week): {calorieCounter + 1000} kcal
            </div>
          </div>
          </div>
        </div>
        <div className="trainingInfo">
          <img src={gym} alt="gym" />
          <h1>Training</h1>
          <div className="userLogResults">Sports: {this.state.sports}</div>
          <div>
            <div className="userLogResults">
              Activity: {this.state.activity}
            </div>
          </div>
          <div>
            <div className="userLogResults">MET: {this.state.met}</div>
            <div>
              <div className="userLogResults">
                Duration: {this.state.duration} min
              </div>
            </div>
            <div>
              <div className="userLogResults">
                Calories Burned: {this.state.caloriesTrain} kcal
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
