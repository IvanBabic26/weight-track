import React, { Component } from "react";
import "./DisplayCase.css";
import request from "superagent";

export default class DisplayCase extends Component {
  state = {
    someDisplay: []
  };

  componentDidMount() {
    this.displayItem(this.props.match.params.id);
    console.log("test");
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
        console.log("response here:", res.body.foods);
        if (err) {
          this.setState({ err });
        } else {
          this.setState({ someDisplay: res.body.foods });
          console.log(res);
        }
      });
  };

  render() {
    return (
      <div className="displayCase">
        {this.state.someDisplay.map(foodItem => (
          <div key={foodItem.food_name} className="outputDisplay">
            <h1>Nutrition Facts</h1>
            <div className="selectedFood">
              <div className="foodPicture">
                <img src={foodItem.photo.thumb} alt="food" />
              </div>
              <div className="foodName">{` ${foodItem.food_name} `}</div>
            </div>
            <br />
            {`Serving Quantity: ${foodItem.serving_qty}`}
            <br />
            {`Serving Size: ${foodItem.serving_unit}`} <br />
            {`Serving Weight: ${foodItem.serving_weight_grams}g`} <br />
            {`Calories: ${foodItem.nf_calories}`} <br />
            {`Fat: ${foodItem.nf_total_fat}g`} <br />
            <ul>
              <li>{`Saturted Fat: ${foodItem.nf_saturated_fat}g`}</li>{" "}
            </ul>
            {`Cholesterol: ${foodItem.nf_cholesterol}g`}
            <br />
            {`Sodium: ${foodItem.nf_sodium}mg`}
            <br />
            {`Phosphorus ${foodItem.nf_p}mg`} <br />
            {`Potassium: ${foodItem.nf_potassium}mg`} <br />
            {`Total Carbohydrates: ${foodItem.nf_total_carbohydrate}g`}
            <ul>
              <li>{`Dietary Fibers: ${foodItem.nf_dietary_fiber}g`}</li>
              <li>{`Sugars: ${foodItem.nf_sugars}g`}</li>
            </ul>
            {`Protiens: ${foodItem.nf_protein}g`} <br />
          </div>
        ))}
      </div>
    );
  }
}
