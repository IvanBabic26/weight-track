import React, { Component } from "react";
import "./NutritionValue.css";
import request from "superagent";
import { Link } from "react-router-dom";

export default class NutritionValue extends Component {
  state = {
    someFood: [],
    someRecipes: [],
    searchInput: [],
    formComplete: false
  };

  searchChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  submitForm = b => {
    b.preventDefault();
    this.setState({
      formComplete: true
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
          this.setState({ someRecipes: res.body.hits });
          console.log(res);
        }
      });
  };

  render() {
    return (
      <div className="nutritionValue">
        <div className="nutriValue">
          <div className="nutriSearch">
            <div className="searchWrapper">

            {/* <h2 className="headerSearch">Find your food right here:</h2>
              <form onSubmit={this.submitForm}>

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
                onClick={this.displayFood}
                
              />
              </form> */}

              <h2 className="headerSearch">Find your recipe right here:</h2>
              <form onSubmit={this.submitForm}>

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
          {this.state.formComplete && (
            <div>
          <h2 className="headerOutput">Results are shown below:</h2>
            <div className="foodOutput">
            <div id="commonOutput" className="foodList">
              <h2>Recipes:</h2>
              </div><br />
              <div className="recipesSearchOutput">
             {this.state.someRecipes.map(recipe => {
                const recipeNameURI = encodeURI(recipe.recipe.label);
                return (
                  <div key={recipe.recipe.label} className="outputList">
                    <Link to={`/displaycase/${recipeNameURI}`}>
                      {recipe.recipe.label}
                    </Link>
                  </div>
                );
              })}
        </div><br />
              </div>
              </div>
          )}
        </div>
      </div>
    );
  }
}
