import React, { Component } from "react";
import "./DisplayCase.css";
import request from "superagent";
// import env from "../../env";

class DisplayCase extends Component {
  state = {
    someDisplay: []
  };

  componentDidMount() {
    this.displayItem(this.props.match.params.id)      
  }
  
  displayItem = (foodName) => {
    request
      .post("https://trackapi.nutritionix.com/v2/natural/nutrients")
      .send({ query: foodName })
      .set({ "x-app-key": "c10265e8605472441e5a77ef78969dc9",
      "x-app-id": "3b0fdaa1",
      Accept: "application/json"
      })
      .end((err, res) => {
        console.log(res.body);
        // if (err) {
        //   this.setState({ err });
        // } else {
        //   this.setState({ someDisplay: res.body });
        //   console.log(res);
        // }
      });
  };

  render() {
      console.log(this.props.match.params)
    return (
      <div className="displayCase">

        {this.state.someDisplay.map(item => (

          <div key={item.full_nutrients} className="outputDisplay">
            {item.full_nutrients}
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayCase;
