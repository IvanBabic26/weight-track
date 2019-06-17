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
    sports: "",
    sportsactivity: "",
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
    console.log("test");
  }

  getExercise = () => {
    request
      .post("https://trackapi.nutritionix.com/v2/natural/exercise")
      .send({
        query:
          // this.state.name &&
          // this.state.age &&
          // this.state.sex &&
          // this.state.height &&
          // this.state.weight &&
          // this.state.sports &&
          this.state.sportsactivity && this.state.distance
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
                return (
                  <option key={activeList.name}>{activeList.name}</option>
                );
              })}
            </select>
              {/* <option value="Adventure Sports">Adventure Sports</option>
              <option value="Aquatic Sports">Aquatic Sports</option>
              <option value="Strength and Agility Sports">
                Strength and Agility Sports
              </option>
              <option value="Ball Sports">Ball Sports</option>
              <option value="Extreme Sports">Extreme Sports</option>
              <option value="Mountain Sports">Mountain Sports</option>
              <option value="Motorised Sports">Motorised Sports</option>
              <option value="Sport Activities">Sport Activities</option>
            </select> */}
            <label>Sports Activity:</label>
            <select
              value={this.state.sportsactivity}
              onChange={e => this.change(e, "sportsactivity")}
              className="selectOption"
              required
            >
              {this.state.activities.map(activeList => {
                return (
                  <option key={activeList.lists}>{activeList.lists}</option>
                );
              })}
            </select>
            {/* adventure sports
              <option value="kayaking">Kayaking</option>
              <option value="canoeing">Canoeing</option>
              <option value="cross-country skiing">Cross-Country Skiing</option>
              <option value="rafting">Whiteater Rafting</option>
              <option value="surfing">Surfing</option>
              aquatic sports
              <option value="snorkeling">Snorkeling</option>
              <option value="swimming">Swimming</option>
              <option value="diving">Diving</option>
              <option value="paddleboarding">Paddle Boarding</option>
              <option value="rowing">Rowing</option>
              <option value="scuba diving">Scuba Diving</option>
              strength and agility sports
              <option value="aerobics">Aerobics</option>
              <option value="aikido">Aikido</option>
              <option value="archery">Archery</option>
              <option value="gymnastics">Gymnastics</option>
              <option value="bodybuilding">Bodybuilding</option>
              <option value="boxing">Boxing</option>
              <option value="running">Running</option>
              <option value="cycling">Road Cycling</option>
              <option value="fencing">Fencing</option>
              <option value="figure skating">Figure Skating</option>
              <option value="judo">Judo</option>
              <option value="karate">Karate</option>
              <option value="kickboxing">Kickboxing</option>
              <option value="mixedmartialarts">Mixed Martial Arts</option>
              <option value="muaythai">Muay Thai</option>
              <option value="trampolining">Trampolining</option>
              <option value="walking">Walking</option>
              <option value="weightlifting">Weight Lifting</option>
              <option value="wrestling">Wrestling</option>
              ball sprots
              <option value="baseball">Baseball</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Tennis</option>
              <option value="bowling">Bowling</option>
              <option value="football">Football</option>
              <option value="golf">Golf</option>
              <option value="handball">Handball</option>
              <option value="hockey">Hockey</option>
              <option value="rugby">Rugby</option>
              <option value="soccer">Soccer</option>
              <option value="volleyball">Volleyball</option>
              <option value="water polo">Water Polo</option>
              extreme sports
              <option value="skateboarding">Skateboarding</option>
              <option value="skydiving">Skydiving</option>
              <option value="snowboarding">Snowboarding</option>
              <option value="wakeboarding">Wakeboarding</option>
              mountain sports
              <option value="climbing">Rock Climbing</option>
              <option value="roadcycling">Road cycling</option>
              <option value="hiking">Hiking</option>
              <option value="mountaineering">Mountain Climbing</option>
              motorised sports
              <option value="cardriving">Car Driving</option>
              <option value="mopedride">Moped Ride</option>
              sports activites
              <option value="capoeira">Capoeira</option>
              <option value="cheerleading">Cheerleading</option>
              <option value="crossfit">CrossFit</option>
              <option value="dancing">Dancing</option>
              <option value="darts">Darts</option>
              <option value="foosball">Foosball</option>
              <option value="jogging">Jogging</option>
              <option value="lasertag">Laser Tag</option>
              <option value="paintball">Paintball</option>
              <option value="parkour">Parkour</option>
              <option value="triathlon">Triathlon</option>
            </select> */}
            <label>Enter the distance in km/miles:</label>
            <input
              type="text"
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
          <h1 className="nutriHeader">Train, Burn, Log</h1>
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
<div className="divTableCell">{this.state.height}cm</div>
<div className="divTableCell">{this.state.weight}kg</div>
<div className="divTableCell">{this.state.sports}</div>
<div className="divTableCell">{this.state.sportsactivity}</div>
<div className="divTableCell">{training.met}</div>
<div className="divTableCell">{training.duration_min}</div>
<div className="divTableCell">{training.nf_calories}</div>
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
