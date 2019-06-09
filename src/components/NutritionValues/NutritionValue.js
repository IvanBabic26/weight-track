import React, { Component } from "react";
import "./NutritionValue.css";
import request from "superagent";
import { Link } from "react-router-dom";

class NutritionValue extends Component {
  state = {
    someData: [],
    searchInput: []
  };

  searchChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  getItem = () => {
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
          this.setState({ someData: res.body.common });
        }
      });
  };

  render() {
    return (
      <div>
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
            <div className="nutriValueWrapper">
              <h1 className="nutriHeader">Welcome to our food database!</h1>
              <div className="nutriText">
                Here you can find all the nutrition values of the food you
                consume. Combining your search with our BMI and Calorie
                Calculators, easily take care of your meal plans and start
                caring about yourself right away!
              </div>
            </div>
          </div>
        </div>

        <h2 className="headerOutput">Results are shown here:</h2>
        <div className="output">
          {this.state.someData.map(item => {
        
            return <div key={item.food_name} className="outputList">
              <Link to={`/displaycase/${item.food_name}`}>{item.food_name}></Link>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default NutritionValue;
