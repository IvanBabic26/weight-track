import React, { Component } from "react";
import "./DisplayCase.css";
import request from "superagent";

class DisplayCase extends Component {
  state = {
    someDisplay: []
  };

  componentDidMount() {
    this.displayItem(this.props.match.params.id);
    console.log('test')
  }

  displayItem = foodName => {
    request
      .post("https://trackapi.nutritionix.com/v2/natural/nutrients")
      .send({ query: foodName })
      .set({
        "x-app-key": "c10265e8605472441e5a77ef78969dc9",
        "x-app-id": "3b0fdaa1",
        Accept: "application/json"
      })
      .end((err, res) => {
        console.log("response here:", res.body.foods[0].full_nutrients);
        if (err) {
          this.setState({ err });
        } else {
          this.setState({ someDisplay: res.body.foods[0].full_nutrients });
          console.log(res);
        }
      });
  };

  render() {
    return (
      <div className="displayCase">
        {this.state.someDisplay.map(item => (
          <div key={item.attr_id} className="outputDisplay">
            {item.value}
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayCase;
