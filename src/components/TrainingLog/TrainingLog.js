import React, { Component } from "react";
import "./TrainingLog.css";
import request from "superagent";

export default class TrainingLog extends Component {
  state = {
    someTraining: [],
    name: "",
    age: "",
    sex: "male",
    height: "",
    weight: "",
    sports: "",
    sportsactivity: "walking",
    distance: ""
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
          this.state.sportsactivity &&
          this.state.distance
      })
      .set({
        "x-app-key": "c10265e8605472441e5a77ef78969dc9",
        "x-app-id": "3b0fdaa1",
        Accept: "application/json"
      })
      .end((err, res) => {
        console.log("response here:", res.exercises);
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

            <label>Type of Sports:</label>
            <select
              value={this.state.sports}
              onChange={e => this.change(e, "sports")}
              className="selectOption"
              required
            >
              <option value="adventuresports">Adventure Sports</option>
              <option value="aquaticsports">Aquatic Sports</option>
              <option value="strengthandagilitysports">
                Strength and Agility Sports
              </option>
              <option value="ballsports">Ball Sports</option>
              <option value="extremesports">Extreme Sports</option>
              <option value="mountainsports">Mountain Sports</option>
              <option value="motorisedsports">Motorised Sports</option>
              <option value="sportactivities">Sport Activities</option>
            </select>
            <label>Sports Activity:</label>
            <select
              value={this.state.sportsactivity}
              onChange={e => this.change(e, "sportsactivity")}
              className="selectOption"
              required
            >
              {/* adventure sports */}
              <option value="kayaking">Kayaking</option>
              <option value="canoeing">Canoeing</option>
              <option value="cross-country skiing">Cross-Country Skiing</option>
              <option value="rafting">Whiteater Rafting</option>
              <option value="surfing">Surfing</option>
              {/* aquatic sports */}
              <option value="snorkeling">Snorkeling</option>
              <option value="swimming">Swimming</option>
              <option value="diving">Diving</option>
              <option value="paddleboarding">Paddle Boarding</option>
              <option value="rowing">Rowing</option>
              <option value="scuba diving">Scuba Diving</option>
              {/* strength and agility sports */}
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
              {/* ball sprots */}
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
              {/* extreme sports */}
              <option value="skateboarding">Skateboarding</option>
              <option value="skydiving">Skydiving</option>
              <option value="snowboarding">Snowboarding</option>
              <option value="wakeboarding">Wakeboarding</option>
              {/* mountain sports */}
              <option value="climbing">Rock Climbing</option>
              <option value="roadcycling">Road cycling</option>
              <option value="hiking">Hiking</option>
              <option value="mountaineering">Mountain Climbing</option>
              {/* motorised sports */}
              <option value="cardriving">Car Driving</option>
              <option value="mopedride">Moped Ride</option>
              {/* sports activites */}
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
            </select>
            <label>Enter the distance(eg 5km, 200m, 18miles):</label>
            <input
              type="text"
              name="distance"
              value={this.state.distance}
              onChange={e => this.change(e, "distance")}
              required
            />
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
        </div>

        {this.state.someTraining.map(training => {
          return (
            <div key={training.tag_id} className="outputList">
              <div className="exerciseOutput">
                {`Hi ${this.state.name}, your metabolic equivalent is ${
                  training.met
                }! In order to burn ${
                  training.nf_calories
                } calories you need to go ${this.state.sportsactivity} for ${
                  training.duration_min
                } min.`}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
