import React, { Component } from "react";
import "./NutritionValue.css";
import request from "superagent";

class NutritionValue extends Component {
  state = {
    someData: [],
    item: [],
    searchInput: []
  };

  searchChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  getItem = (item) => {
    request
      .get("https://trackapi.nutritionix.com/v2/search/instant")
      .query({ query: this.state.searchInput })
      .set({
        "x-app-key": "c10265e8605472441e5a77ef78969dc9",
        "x-app-id": "3b0fdaa1",
        Accept: "application/json"
      })
      .end((err, res) => {
        console.log(err, res.body);
        if (err) {
          this.setState({ err });
        } else {
          this.setState({ someData: res.body });
        }
      });
  };

  render() {
    return (
      <div className="nutriValue">
        <div className="nutriSearch">
          <div className="searchWrapper">
            <h2 className="headerSearch">Find your food right here:</h2>
            <input
              className="searchBox"
              type="search"
              placeholder="Search Food"
              onChange={e => this.searchChange(e)}
            />
            <input
              type="submit"
              className="btnSubmitNutri"
              value="Submit"
              onClick={this.getItem}
            />
          </div>
        </div>
        <div className="nutriValueWrapper">
          <div className="nutriHeader">
            <h1>Welcome to our food database!</h1>
          </div>
          <div className="nutriText">
            Here you can find all the nutrition values of the food you consume.
            Combining your search with our BMI and Calorie Calculators, easily
            take care of your meal plans and start caring about yourself right
            away!
          </div>
          <div className="searchOutput">
            <h2 className="headerOutput">Results:</h2>
            {/* {this.state.getItem.map(item => (
              <div>{item.food_name}</div>
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default NutritionValue;
