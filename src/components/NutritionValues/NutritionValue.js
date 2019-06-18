import React, { Component } from "react";
import "./NutritionValue.css";
import request from "superagent";
import { Link } from "react-router-dom";

export default class NutritionValue extends Component {
  
  state = {
    commonFoodData: [],
    brandedFoodData: [],
    recipeData: [],
    searchInput: [],
    formComplete: false,
  };




  searchChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  submitFormFood = b => {
    b.preventDefault();
    this.setState({
      formFoodComplete: true
    });
  };

  submitFormRecipe = b => {
    b.preventDefault();
    this.setState({
      formRecipeComplete: true
    });
  };

  displayRecipe = () => {
    request
      .get("https://api.edamam.com/search")
      .query({
        q: this.state.searchInput,
        app_id: "733d11da",
        app_key: "a1bce3ac5fb496203057355abc225646"
      })
      .set({
        Accept: "application/json"
      })
      .end((err, res) => {
        console.log("response here:", res.hits);
        if (err) {
          this.setState({ err });
        } else {
          this.setState({ recipeData: res.body.hits });
          console.log(res);
        }
      });
  };

  getFood = () => {
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
          this.setState({ commonFoodData: res.body.common });
          this.setState({ brandedFoodData: res.body.branded });
        }
      });
  };

  render() {
    return (
      <div className="nutritionValue">
        <div className="nutriValue">
          <div className="nutriSearch">
            <div className="searchWrapper">
              <h2 className="headerSearch">Find your desired food:</h2>
              <form onSubmit={this.submitFormFood}>
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
                  onClick={this.getFood}
                />
              </form>
            </div>
            <div className="searchWrapper">
              <h2 className="headerSearch">Find an interesting recipe:</h2>
              <form onSubmit={this.submitFormRecipe}>
                <input
                  className="searchBox"
                  type="search"
                  placeholder="Search Recipes"
                  onChange={e => this.searchChange(e)}
                />
                <input
                  type="submit"
                  className="btnSubmitNutri"
                  value="Submit"
                  onClick={this.displayRecipe}
                />
              </form>
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
            <div className="outputWrapper">
          {this.state.formRecipeComplete && (
            <div>
              <h2 className="headerOutput">Recipe are shown below:</h2>
              <div className="recipeOutput">
                <div id="commonOutput" className="foodList">
                  <h2>Recipes:</h2>
                </div>
                <br />
                <div className="recipesSearchOutput">
                  {this.state.recipeData.map(recipe => {
                    const recipeNameURI = encodeURI(recipe.recipe.label);
                    return (
                      <div key={recipe.recipe.label} className="outputList">
                        <Link to={`/displaycase/${recipeNameURI}`}>
                          {recipe.recipe.label}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <br />
              </div>
            </div>
          )}
          {this.state.formFoodComplete && (
            <div>
          <h2 className="headerOutput">Food results are shown below:</h2>
            <div className="foodOutput">
            <div id="commonOutput" className="foodList">
              <h2>Common Foods:</h2>
              {this.state.commonFoodData.map(item => {
                const foodNameURI = encodeURI(item.food_name);
                return (
                  <div key={item.food_name} className="outputList">
                    <Link to={`/displaycase/${foodNameURI}`}>
                      {item.food_name}
                    </Link>
                  </div>
                );
              })}
            </div>
              <div id="brandedOutput" className="foodList">
                <h2>Branded Foods:</h2>
                {this.state.brandedFoodData.map(item => {
                  const foodNameURI = encodeURI(item.food_name);
                  return (
                    <div key={item.food_name} className="outputList">
                      <Link to={`/displaycase/${foodNameURI}`}>
                        {item.food_name}
                      </Link>
                    </div>
                  );
                })}
              </div>
          </div>
          </div>
          )}
          </div>
        </div>
      </div>
    );
  }
}
