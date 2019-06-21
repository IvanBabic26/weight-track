import React from "react";
import "./TrainingLog.css";
import request from "superagent";
import { activities, activityUnit } from "../EnvFiles/Const";
import { apiIdentification } from "../EnvFiles/API";
import trainingdata from "../img/trainingdata.png";

export default class TrainingLog extends React.Component {
  state = {
    trainingLogData: [],
    name: "",
    age: "",
    sex: "Male",
    height: "",
    weight: "",
    sports: "Adventure Sports",
    sportsActivity: "Kayaking",
    distance: "",
    activities,
    activityUnit
  };

  componentDidMount() {
    this.getExercise(this.props.match.params.exercises);
  }

  componentWillMount() {
    this.checkIfInfoIsAlreadyEntered();
  }

  checkIfInfoIsAlreadyEntered = () => {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const sex = localStorage.getItem("sex");
    const height = localStorage.getItem("height");
    const weight = localStorage.getItem("weight");
    if (name !== null) {
      this.setState({
        name: name,
        age: age,
        sex: sex,
        height: height,
        weight: weight
      });
    }
  };

  getExercise = () => {
    const activityUnit = this.state.activityUnit[this.state.sportsActivity];

    request
      .post("https://trackapi.nutritionix.com/v2/natural/exercise")
      .send({
        query: `${this.state.sportsActivity} ${
          this.state.distance
        } ${activityUnit}`,
        height_cm: this.state.height,
        weight_kg: this.state.weight
      })
      .set(apiIdentification)
      .end((err, res) => {
        console.log("response here:", res.body.exercises);
        if (err) {
          return this.setState({ err });
        }
        this.setState({ trainingLogData: res.body.exercises });
        console.log(res);
      });
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("age", this.state.age);
    localStorage.setItem("sex", this.state.sex);
    localStorage.setItem("height", this.state.height);
    localStorage.setItem("weight", this.state.weight);
    localStorage.setItem("sports", this.state.sports);
    localStorage.setItem("activity", this.state.sportsActivity);
  };

  changeValue = (e, name) => {
    e.preventDefault();

    this.setState({ [name]: e.target.value });
  };

  submitTrainingForm = e => {
    e.preventDefault();

    this.getExercise();
    this.setState({
      formComplete: true
    });
  };

  render() {
    const chosenActivities = this.state.activities.filter(
      activeList => activeList.name === this.state.sports
    );
    const { name, age, weight, height } = this.state;
    const isEnabled =
      name.length > 0 &&
      age.length > 0 &&
      height.length > 0 &&
      weight.length > 0;

    return (
      <div className="trainLog">
        <div className="trainLogWrapper">
          <div className="inputLog">
            <div className="inputLogHeader">
              <h2>Training Data</h2>
            </div>
            <form id="formTraining" onSubmit={this.submitTrainingForm}>
              <label>Please enter your name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.changeValue(e, "name")}
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
                onChange={e => this.changeValue(e, "age")}
                required
              />
              <label>Sex:</label>
              <select
                value={this.state.sex}
                onChange={e => this.changeValue(e, "sex")}
                className="selectOption"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <label>Enter your height in cm:</label>
              <input
                className="inputNumber"
                type="number"
                min="20"
                max="250"
                name="height"
                value={this.state.height}
                onChange={e => this.changeValue(e, "height")}
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
                onChange={e => this.changeValue(e, "weight")}
                required
              />

              <label>Type of Sports:</label>
              <select
                value={this.state.sports}
                onChange={e => this.changeValue(e, "sports")}
                className="selectOption"
                required
              >
                {this.state.activities.map(activeList => (
                  <option key={activeList.name}>{activeList.name}</option>
                ))}
              </select>
              <label>Sports Activity:</label>
              <select
                value={this.state.sportsActivity}
                onChange={e => this.changeValue(e, "sportsActivity")}
                className="selectOption"
                required
              >
                {chosenActivities[0].lists.map(activity => (
                  <option key={activity}>{activity}</option>
                ))}
              </select>
              <label>Enter the duration(min)/distance(km):</label>
              <input
                type="number"
                name="distance"
                value={this.state.distance}
                onChange={e => this.changeValue(e, "distance")}
                required
              />
              <label>Get the data!</label>
              <input
                type="submit"
                className="btnSubmitExercise"
                value="Submit"
                disabled={!isEnabled}
              />
            </form>
          </div>
        </div>
        <div className="trainingTextWrapper">
          <h1 className="trainingLogHeader">Train, Burn, Log</h1>
          <p className="trainText">
            Hi there! Are you ready? Let's begin. Everytime you do some
            exercise, ever wonder how much calories you burned? Well, this is
            the place for you. Here you can make your own log with your training
            routines and exercises. Just select the activites you did and voila,
            see your progress on that fat burning regime!
          </p>
          {this.state.trainingLogData.map(training => {
            localStorage.setItem("MET", training.met);
            localStorage.setItem("CaloriesTrain", training.nf_calories);
            localStorage.setItem("Duration", training.duration_min);
            return (
              <div key={training.tag_id} className="outputList">
                <div className="exerciseOutput">
                {this.state.formComplete && (
                  <div className="exerciseData">
                    <img src={trainingdata} alt="training" />
                    <h4>EXERCISE DATA</h4>
                    <div id="lineTop" className="exerciseResult">{`Name: ${
                      this.state.name
                    }`}</div>
                    <div>
                      <div id="lineTop" className="exerciseResult">
                        {`Age: ${this.state.age}`}
                      </div>
                    </div>
                    <div>
                      <div id="lineTop" className="exerciseResult">{`Sex: ${
                        this.state.sex
                      }`}</div>
                    </div>
                    <div>
                      <div id="lineTop" className="exerciseResult">
                        {`Height: ${this.state.height} cm`}
                      </div>
                      <div>
                        <div id="lineTop" className="exerciseResult">
                          {`Weight: ${this.state.weight} kg`}
                        </div>
                      </div>
                      <div>
                        <div id="lineTop" className="exerciseResult">
                          {`Type of Sports: ${this.state.sports}`}
                        </div>
                      </div>
                      <div>
                        <div id="lineTop" className="exerciseResult">
                          {`Sports Activity: ${this.state.sportsActivity}`}
                        </div>
                      </div>
                      <div>
                        <div id="lineTop" className="exerciseResult">
                          {`MET: ${training.met}`}
                        </div>
                      </div>
                      <div>
                        <div id="lineTop" className="exerciseResult">
                          {`Duration: ${training.duration_min} min`}
                        </div>
                      </div>
                      <div>
                        <div id="lineTop" className="exerciseResult">
                          {`Calories burned: ${training.nf_calories} kcal`}
                        </div>
                      </div>
                      <div id="lineTop" className="exerciseResult" />
                    </div>
                  </div>
                )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
