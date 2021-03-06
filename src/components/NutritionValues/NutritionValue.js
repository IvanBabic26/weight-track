import React from "react";
import "./NutritionValue.css";
import request from "superagent";
import { Link } from "react-router-dom";
import { apiIdentification } from "../ImportFiles/API";
import common from "../img/common.png";
import branded from "../img/branded.png";
import recipe from "../img/recipe.png";

export default class NutritionValue extends React.Component {
  state = {
    commonFoodData: [],
    brandedFoodData: [],
    recipeData: [],
    searchInput: [],
    formComplete: false
  };

  searchChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  submitFormFood = e => {
    e.preventDefault();

    this.setState({
      formFoodComplete: true
    });
  };

  submitFormRecipe = e => {
    e.preventDefault();

    this.setState({
      formRecipeComplete: true
    });
  };

  getRecipes = () => {
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
          return this.setState({ err });
        }
        this.setState({ recipeData: res.body.hits });
        console.log(res);
      });
  };

  getFood = () => {
    request
      .get("https://trackapi.nutritionix.com/v2/search/instant")
      .query({ query: this.state.searchInput })
      .set(apiIdentification)
      .end((err, res) => {
        console.log(err, res.body);
        if (err) {
          return this.setState({ err });
        }
        this.setState({
          commonFoodData: res.body.common,
          brandedFoodData: res.body.branded
        });
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
                  onClick={this.getRecipes}
                />
              </form>
            </div>
            <div className="nutriValueWrapper">
              <h1 className="nutriHeader">Welcome to our food database!</h1>
              <p className="nutriText">
                Here you can find all the nutrition values of the food you
                consume. Combining your search with our BMI and Calorie
                Calculators, easily take care of your meal plans and start
                caring about yourself right away!
              </p>
            </div>
          </div>
          <div className="outputWrapper">
            {this.state.formRecipeComplete && (
              <div>
                <h2 className="headerOutput">Recipes are shown below:</h2>
                <div className="recipeOutput">
                  <div id="commonOutput" className="foodList">
                    <img src={recipe} alt="recipe" />
                    <h2>Recipes:</h2>
                  </div>
                  <br />
                  <div className="recipesSearchOutput">
                    {this.state.recipeData.map(item => {
                      const recipeNameURI = encodeURI(item.recipe.label);
                      return (
                        <div key={item.recipe.label} className="outputList">
                          <Link
                            to={{
                              pathname: `/displaycase/${recipeNameURI}`,
                              state: {
                                type: "recipe"
                              }
                            }}
                          >
                            {item.recipe.label}
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
                    <img src={common} alt="commonFood" />
                    <h2>Common Foods:</h2>
                    {this.state.commonFoodData.map(item => {
                      const foodNameURI = encodeURI(item.food_name);
                      return (
                        <div key={item.food_name} className="outputList">
                          <Link
                            to={{
                              pathname: `/displaycase/${foodNameURI}`,
                              state: {
                                type: "food"
                              }
                            }}
                          >
                            {item.food_name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div id="brandedOutput" className="foodList">
                    <img src={branded} alt="brandedFood" />
                    <h2>Branded Foods:</h2>
                    {this.state.brandedFoodData.map(item => {
                      const foodNameURI = encodeURI(item.food_name);
                      return (
                        <div key={item.food_name} className="outputList">
                          <Link
                            to={{
                              pathname: `/displaycase/${foodNameURI}`,
                              state: {
                                type: "food"
                              }
                            }}
                          >
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
