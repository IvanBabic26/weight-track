import React from "react";
import "./UserLog.css";

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
    const BMI = localStorage.getItem("BMI");
    const Message = localStorage.getItem("Message");
    const optimalWeight = localStorage.getItem("OptimalWeight");
    const calorieCounter = localStorage.getItem("calorieCounter");
    const MET = localStorage.getItem("MET");
    const CaloriesTrain = localStorage.getItem("CaloriesTrain");
    const Duration = localStorage.getItem("Duration");
    const sports = localStorage.getItem("sports");
    const activity = localStorage.getItem("activity");

    this.setState({
      name,
      age,
      sex,
      height,
      weight,
      BMI,
      Message,
      optimalWeight,
      calorieCounter,
      MET,
      CaloriesTrain,
      Duration,
      sports,
      activity
    });
  }

  render() {
    return (
      <div className="userLog">
        <div className="userLogInfo">
          <h1>Basic Info</h1>
          <div>
            <div className="exerciseResult">
              Name: {this.state.name}
            </div>
            <div>
              <div className="exerciseResult">
                Age: {this.state.age}
              </div>
            </div>
            <div>
              <div className="exerciseResult">
                Sex: {this.state.sex}
              </div>
            </div>
            <div>
              <div className="exerciseResult">
                Height: {this.state.height} cm
              </div>
            </div>
            <div>
              <div className="exerciseResult">
                Weight: {this.state.weight} kg
              </div>
            </div>
          </div>
        </div>
        <div className="bmiInfo">
          <h1>BMI</h1>
          <div>
            <div className="exerciseResult">
              {`Your BMI is currently at ${this.state.BMI}.
        ${this.state.Message}
        ${this.state.optimalWeight} kg`}
            </div>
          </div>
        </div>
        <div className="calorieInfo">
          <h1>Calories</h1>
          <div>
            <div className="exerciseResult">
              Daily Calorie Input: {this.state.calorieCounter} kcal
            </div>
          </div>
        </div>
        <div className="trainingInfo">
          <h1>Training</h1>
          <div className="exerciseResult">
            Sports: {this.state.sports}
          </div>
          <div>
            <div className="exerciseResult">
              Activity: {this.state.activity}
            </div>
          </div>
          <div>
            <div className="exerciseResult">
              MET: {this.state.MET}
            </div>
            <div>
              <div className="exerciseResult">
                Duration: {this.state.Duration} min
              </div>
            </div>
            <div>
              <div className="exerciseResult">
                Calories Burned: {this.state.CaloriesTrain} kcal
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
