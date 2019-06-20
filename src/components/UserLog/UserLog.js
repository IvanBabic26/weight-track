import React from "react";

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
    const MET = localStorage.getItem("MET");
    const CaloriesTrain = localStorage.getItem("CaloriesTrain");
    const Duration = localStorage.getItem("Duration");
    const Sports = localStorage.getItem("Sports");
    const Activity = localStorage.getItem("Activity");

    this.setState({
      name,
      age,
      sex,
      height,
      weight,
      BMI,
      Message,
      optimalWeight,
      MET,
      CaloriesTrain,
      Duration,
      Sports,
      Activity
    });
  }

  render() {
    return (
      <div className="userLog">
        <h1>Basic Info</h1>
        <div className="userLogInfo">
          Name:{this.state.name}
          Age: {this.state.age}
          Sex: {this.state.sex}
          Height: {this.state.height} cm
          Weight: {this.state.weight} kg
        </div>
        <div className="bmiInfo">
        <h1>BMI</h1>
        {`Your BMI is ${this.state.BMI}
        ${this.state.Message}
        ${this.state.optimalWeight} kg`}
        </div>
        <div className="calorieInfo">
        <h1>Calories</h1>
        {/* {this.state.Calorie} */}
        </div>
           <div className="trainingInfo">
           <h1>Training</h1>
            Type of Sports:{this.state.Sports}
            Sports Activity:{this.state.Activity}
            MET:{this.state.MET}
            Duration:{this.state.Duration} min
            Calories Burned:{this.state.CaloriesTrain} kcal
        </div>
      </div>
    );
  }
}
