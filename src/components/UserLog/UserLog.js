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
    const NameBMI = localStorage.getItem("NameBMI");
    const AgeBMI = localStorage.getItem("AgeBMI");
    const SexBMI = localStorage.getItem("SexBMI");
    const HeightBMI = localStorage.getItem("HeightBMI");
    const WeightBMI = localStorage.getItem("WeightBMI");
    const BMI = localStorage.getItem("BMI");
    const Message = localStorage.getItem("Message");
    const optimalWeight = localStorage.getItem("OptimalWeight");
    const NameTrain = localStorage.getItem("NameTrain");
    const AgeTrain = localStorage.getItem("AgeTrain");
    const SexTrain = localStorage.getItem("SexTrain");
    const HeightTrain = localStorage.getItem("HeightTrain");
    const WeightTrain = localStorage.getItem("WeightTrain");
    const CaloriesTrain = localStorage.getItem("CaloriesTrain");
    const Duration = localStorage.getItem("Duration");
    const Sports = localStorage.getItem("Sports");
    const Activity = localStorage.getItem("Activity");

    this.setState({
      NameBMI,
      AgeBMI,
      SexBMI,
      HeightBMI,
      WeightBMI,
      BMI,
      Message,
      optimalWeight,
      NameTrain,
      AgeTrain,
      SexTrain,
      HeightTrain,
      WeightTrain,
      CaloriesTrain,
      Duration,
      Sports,
      Activity
    });
  }

  render() {
    return (
      <div className="userLog">
        <div className="bmiUserLog">
          {`Hello ${this.state.Name}! Your BMI is currently 
              ${this.state.BMI}!${this.state.Message}
              ${this.state.optimalWeight}.`}
        </div>
        <div className="calorieUserLog" />
        <div className="trainingUserLog" />
        {this.state.CaloriesTrain}
        {this.state.Duration}
      </div>
    );
  }
}
