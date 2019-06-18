import React, { Component } from "react";
import "./TrainingLog.css";
import request from "superagent";

export default class TrainingLog extends Component {
  state = {
    someTraining: [],
    name: "",
    age: "",
    sex: "Male",
    height: "",
    weight: "",
    sports: "Adventure Sports",
    sportsActivites: "",
    distance: "",
    activities: [
      {
        name: "Adventure Sports",
        lists: [
          "Kayaking",
          "Canoeing",
          "Cross-Country Skiing",
          "Whiteater Rafting",
          "Surfing"
        ]
      },
      {
        name: "Aquatic Sports",
        lists: [
          "Snorkeling",
          "Swimming",
          "Diving",
          "Paddle Boarding",
          "Rowing",
          "Scuba Diving"
        ]
      },
      {
        name: "Strength and Agility Sports",
        lists: [
          "Aerobics",
          "Aikido",
          "Archery",
          "Gymnastics",
          "Bodybuilding",
          "Boxing",
          "Running",
          "Road Cycling",
          "Fencing",
          "Figure Skating",
          "Judo",
          "Karate",
          "Kickboxing",
          "Mixed Martial Arts",
          "Muay Thai",
          "Trampolining",
          "Walking",
          "Weight Lifting",
          "Wrestling"
        ]
      },
      {
        name: "Ball Sports",
        lists: [
          "Baseball",
          "Basketball",
          "Tennis",
          "Bowling",
          "Football",
          "Golf",
          "Handball",
          "Hockey",
          "Rugby",
          "Soccer",
          "Volleyball",
          "Water Polo"
        ]
      },
      {
        name: "Extreme Sports",
        lists: ["Skateboarding", "Skydiving", "Snowboarding", "Wakeboarding"]
      },
      {
        name: "Mountain Sports",
        lists: ["Rock Climbing", "Road cycling", "Hiking", "Mountain Climbing"]
      },
      {
        name: "Motorised Sports",
        lists: ["Car Driving", "Moped Ride"]
      },
      {
        name: "Sports Activities",
        lists: [
          "Capoeira",
          "Cheerleading",
          "CrossFit",
          "Dancing",
          "Darts",
          "Foosball",
          "Jogging",
          "Laser Tag",
          "Paintball",
          "Parkour",
          "Triathlon"
        ]
      }
    ]
  };

  componentDidMount() {
    this.getExercise(this.props.match.params.exercises);
  }

  getExercise = () => {
    request
      .post("https://trackapi.nutritionix.com/v2/natural/exercise")
      .send({
        query: `${this.state.sportsActivites} ${this.state.distance}`,
        height_cm: this.state.height,
        weight_kg: this.state.weight
      })
      .set({
        "x-app-key": "c10265e8605472441e5a77ef78969dc9",
        "x-app-id": "3b0fdaa1",
        Accept: "application/json"
      })
      .end((err, res) => {
        console.log("response here:", res.body.exercises);
        if (err) {
          this.setState({ err });
        } else {
          this.setState({ someTraining: res.body.exercises });
          console.log(res);
        }
      });
  };

  change = (e, name) => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
  };

  render() {
    const chosenActivities = this.state.activities.filter(
      activeList => activeList.name === this.state.sports
    );
    return (
      <div className="trainLog">
        <div className="trainLogWrapper">
          <div className="inputLog">
            <div className="inputLogHeader">
              <h2>Training Data</h2>
            </div>
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

            <label>Type of Sports:</label>
            <select
              value={this.state.sports}
              onChange={e => this.change(e, "sports")}
              className="selectOption"
              required
            >
              {this.state.activities.map(activeList => {
                return <option key={activeList.name}>{activeList.name}</option>;
              })}
            </select>
            <label>Sports Activity:</label>
            <select
              value={this.state.sportsActivites}
              onChange={e => this.change(e, "sportsActivites")}
              className="selectOption"
              required
            >
              {chosenActivities[0].lists.map(activity => {
                return <option key={activity}>{activity}</option>;
              })}
            </select>
            <label>Enter the duration/distance:</label>
            <input
              type="number"
              name="distance"
              value={this.state.distance}
              onChange={e => this.change(e, "distance")}
              required
            />
            <label>I like trains!</label>
            <input
              type="submit"
              className="btnSubmitExercise"
              value="Submit"
              onClick={this.getExercise}
            />
          </div>
        </div>
        <div className="trainingTextWrapper">
          <h1 className="trainingLogHeader">Train, Burn, Log</h1>
          <div className="trainText">
            Hi there! Are you ready? Let's begin. Everytime you do some
            exercise, ever wonder how much calories you burned? Well, this is
            the place for you. Here you can make your own log with your training
            routines and exercises. Just select the activites you did and voila,
            see your progress on that fat burning regime!
          </div>
          {this.state.someTraining.map(training => {
            return (
              <div key={training.tag_id} className="outputList">
                <div className="exerciseOutput">
                  <div className="divTable">
                    <div className="divTableBody">
                      <div className="divTableRow">
                        <div className="divTableCell">Name</div>
                        <div className="divTableCell">Age</div>
                        <div className="divTableCell">Sex</div>
                        <div className="divTableCell">Height</div>
                        <div className="divTableCell">Weight</div>
                        <div className="divTableCell">Sport Type</div>
                        <div className="divTableCell">Sports Activity</div>
                        <div className="divTableCell">MET</div>
                        <div className="divTableCell">Duration</div>
                        <div className="divTableCell">Calories Burned</div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell">{this.state.name}</div>
                        <div className="divTableCell">{this.state.age}</div>
                        <div className="divTableCell">{this.state.sex}</div>
                        <div className="divTableCell">
                          {this.state.height}cm
                        </div>
                        <div className="divTableCell">
                          {this.state.weight}kg
                        </div>
                        <div className="divTableCell">{this.state.sports}</div>
                        <div className="divTableCell">
                          {this.state.sportsActivites}
                        </div>
                        <div className="divTableCell">{training.met}</div>
                        <div className="divTableCell">
                          {training.duration_min}min
                        </div>
                        <div className="divTableCell">
                          {training.nf_calories}kcal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
