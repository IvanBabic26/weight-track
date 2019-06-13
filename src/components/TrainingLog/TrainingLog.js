import React, { Component } from "react";
import "./TrainingLog.css";
import request from "superagent";

export default class TrainingLog extends Component {
  state = {
    someTraining: [],
    searchValue: []
  };
  componentDidMount() {
    this.getExercise(this.props.match.params.name);
    console.log("test");
  }

  getExercise = () => {
    request
      .post("https://trackapi.nutritionix.com/v2/natural/exercise")
      .send({ query: this.state.searchValue })
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

  searchChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    return (
      <div className="trainLog">
        <h1>
          Hi there! Are you ready? Let's begin. Everytime you do some exercise,
          ever wonder how much calories you burned? Well, this is the place for
          you. Here you can make your own log with your training routines and
          exercises. Just select the activites you did and voila, see your
          progress on that fat burning regime!
        </h1>
        <div className="searchWrapper">
          <input
            className="searchBox"
            type="search"
            placeholder="Search"
            onChange={e => this.searchChange(e)}
          />
          <input
            type="submit"
            className="btnSubmitExercise"
            value="Submit"
            onClick={this.getExercise}
          />
        </div>

        {this.state.someTraining.map(training => {
          return (
            <div key={training.tag_id} className="outputList">
              <div className="exerciseOutput">
                {/* <div>Burned Calories: {training.nf_calories}</div>
                <div>Duration: {training.duration_min}</div>
                <div>MET: {training.met}</div> */}

                <table>
                  <tr>
                    <th>Exercise Name</th>
                    <th>Met</th>
                    <th>Duration</th>
                    <th>Calories Expended</th>
                  </tr>
                  <tr>
                    <td>{training.name}</td>
                    <td>{training.met}</td>
                    <td>{training.duration_min}</td>
                    <td>{training.nf_calories}</td>
                  </tr>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
