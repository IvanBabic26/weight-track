import React, { Component } from "react";
import "./DisplayCase.css";
import request from "superagent";

class DisplayCase extends Component {
  state = {
    someDisplay: [],
    item: []
  };

  displayItem = () => {
    request
      .post("https://trackapi.nutritionix.com/v2/natural/nutrients")
      .send({ query: this.state.item })
      .set({
        "x-app-key": "c10265e8605472441e5a77ef78969dc9",
        "x-app-id": "3b0fdaa1",
        Accept: "application/json",
        "Content-Type": "application/json"
      })
      .end((err, res) => {
        console.log(err, res);
        if (err) {
          this.setState({ err });
        } else {
          this.setState({ someDisplay: res });
          console.log(res);
        }
      });
  };

  render() {
    return (
      <div className="displayCase">
        {this.state.someDisplay.map(item => (
          <div>
            <li>{item.full_nutrients}</li>
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayCase;
