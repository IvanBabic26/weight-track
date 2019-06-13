import React, { Component } from "react";
import "./DisplayCase.css";
import request from "superagent";

export default class DisplayCase extends Component {
  state = {
    someDisplay: [],
    someTraining: [],
    searchValue: []
  };
  componentDidMount() {
    this.displayItem(this.props.match.params.id);
    this.getExercise(this.props.match.params.id);
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

  searchChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

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

  render() {
    return (
      <div className="displayCase">
        {this.state.someDisplay.map(foodItem => (
          <div key={foodItem.food_name} className="outputDisplay">
            <div className="selectedFood">
              <div className="foodPicture">
                <img src={foodItem.photo.thumb} alt="food" class="foodImg" />
              </div>
              <div className="foodName">{` ${foodItem.food_name} `}</div>
            </div>
            <h1>Nutrition Facts</h1>

            <div className="bar1" />
            {`Serving Quantity: ${foodItem.serving_qty}`}

            <div className="line">
              {`Serving Size: ${foodItem.serving_unit}`}{" "}
            </div>
            <div className="line">
              {`Serving Weight: ${foodItem.serving_weight_grams}g`}{" "}
            </div>
            <div className="bar1" />
            {`Calories: ${foodItem.nf_calories}`}
            <div className="bar2" />
            {`Total Fat: ${foodItem.nf_total_fat}g`}

            <div className=" line indent">{`Saturted Fat: ${
              foodItem.nf_saturated_fat
            }g`}</div>

            <div className="line">{`Cholesterol: ${
              foodItem.nf_cholesterol
            }g`}</div>
            <div className="line">{`Sodium: ${foodItem.nf_sodium}mg`}</div>
            <div className="line">{`Phosphorus ${foodItem.nf_p}mg`} </div>
            <div className="line">
              {`Potassium: ${foodItem.nf_potassium}mg`}{" "}
            </div>
            <div className="bar1" />
            {`Total Carbohydrates: ${foodItem.nf_total_carbohydrate}g`}

            <div className="line indent">{`Dietary Fibers: ${
              foodItem.nf_dietary_fiber
            }g`}</div>
            <div className="line indent">{`Sugars: ${
              foodItem.nf_sugars
            }g`}</div>

            <div className="bar2" />
            <div className="line">{`Protiens: ${foodItem.nf_protein}g`} </div>
            <div className="line" />
          </div>
        ))}
      </div>
    );
  }
}
