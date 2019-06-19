import React, { Component } from "react";
import "./DisplayCase.css";
import request from "superagent";
import { apiIdentification } from "../EnvFiles/API";

export default class DisplayCase extends Component {
  state = {
    recipesData: [],
    foodData: []
  };

  componentWillMount() {
    if (this.props.location.state.type === "food") {
      return this.displayFood(this.props.match.params.id);
    }
    this.displayRecipe(this.props.match.params.id);
  }

  displayFood = foodName => {
    request
      .post("https://trackapi.nutritionix.com/v2/natural/nutrients")
      .send({ query: foodName })
      .set(apiIdentification)
      .end((err, res) => {
        console.log("response here:", res.body.foods);
        if (err) {
          return this.setState({ err });
        }
        this.setState({ foodData: res.body.foods });
        console.log(res);
      });
  };

  displayRecipe = () => {
    const recipeName = this.props.match.params.id;
    request
      .get("https://api.edamam.com/search")
      .query({
        q: recipeName,
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
        this.setState({ recipesData: res.body.hits });
        console.log(res);
      });
  };

  render() {
    return (
      <div className="displayCase">
        {this.state.foodData.map(foodItem => (
          <div key={foodItem.food_name} className="outputDisplay">
            <div className="selectedFood">
              <div className="foodPicture">
                <img src={foodItem.photo.thumb} alt="food" />
              </div>
              <div className="foodName">{` ${foodItem.food_name} `}</div>
            </div>
            <h1>Nutrition Facts</h1>
            <div className="headerIngredients">Basic Info:</div>
            <div className="bar2" />
            <br />
            <div className="recipeText">
              {`Serving Quantity: ${foodItem.serving_qty}`}
              <br />

              {`Serving Size: ${foodItem.serving_unit}`}
              <br />

              {`Serving Weight: ${foodItem.serving_weight_grams}g`}
              <br />
            </div>
            <br />
            <div className="headerIngredients">Total Nutrients:</div>
            <div className="bar2" />
            <br />
            <div className="recipeText">
              {`Calories: ${foodItem.nf_calories}`}
              <br />
              <div className="line" />
              {`Total Fat: ${foodItem.nf_total_fat}g`}
              <br />

              <div className="line indent">{`Saturated Fat: ${
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

              {`Total Carbohydrates: ${foodItem.nf_total_carbohydrate}g`}

              <div className="line indent">{`Dietary Fibers: ${
                foodItem.nf_dietary_fiber
              }g`}</div>
              <div className="line indent">{`Sugars: ${
                foodItem.nf_sugars
              }g`}</div>
              <div className="line">{`Protiens: ${foodItem.nf_protein}g`} </div>
              <div className="line" />
            </div>
          </div>
        ))}
        {this.state.recipesData.map(foodRecipes => (
          <div key={foodRecipes.recipe.label} className="outputDisplay">
            <div className="selectedRecipe">
              <div className="foodImage">
                <img src={foodRecipes.recipe.image} alt="recipePic" />
              </div>
              <div className="foodName">{` ${foodRecipes.recipe.label} `}</div>
            </div>
            <h1>Recipe</h1>
            <div className="headerIngredients">Basic Info:</div>
            <div className="bar2" />
            <br />
            <div className="recipeText">
              {`Serving Quantity: ${foodRecipes.recipe.yield}`}
              <br /> <div className="line" />
              {`Total Weight: ${foodRecipes.recipe.totalWeight} g`}
              <br /> <div className="line" />
              {`Total Time: ${foodRecipes.recipe.totalTime} min`}
              <br /> <div className="line" />
            </div>
            <br />
            <div className="headerIngredients">Labels:</div>
            <div className="bar2" />
            <br />
            <div className="recipeText">
              {`Diet Label: ${foodRecipes.recipe.dietLabels}`}
              <br /> <div className="line" />
              {`Health Label: ${foodRecipes.recipe.healthLabels}`}
              <br /> <div className="line" />
              {`Cautions: ${foodRecipes.recipe.cautions}`}
              <br /> <div className="line" />
            </div>
            <br />
            <div className="headerIngredients">Ingredients:</div>
            <div className="bar2" />
            <br />
            <div className="ingredientsRecipe">
              {foodRecipes.recipe.ingredientLines}
            </div>
            <br />
            <div className="headerIngredients">Total Nutrients:</div>
            <div className="bar2" />
            <br />
            <div className="valuesRecipe">
              <div className="nutrientsRecipe">
                {foodRecipes.recipe.totalNutrients.ENERC_KCAL.label}
                <br />
                {foodRecipes.recipe.totalNutrients.ENERC_KCAL.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.ENERC_KCAL.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FAT.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FAT.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.FAT.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FASAT.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FASAT.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.FASAT.unit}
                <br /> <div className="line" />
                {/* 
              {foodRecipes.recipe.totalNutrients.FATRN.label}
              
              {foodRecipes.recipe.totalNutrients.FATRN.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.FATRN.unit}
             */}
                {foodRecipes.recipe.totalNutrients.FAPU.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FAPU.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.FAPU.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.CHOCDF.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.CHOCDF.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.CHOCDF.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FIBTG.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FIBTG.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.FIBTG.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.SUGAR.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.SUGAR.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.SUGAR.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.PROCNT.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.PROCNT.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.PROCNT.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.NA.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.NA.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.NA.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.CA.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.CA.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.CA.unit}
                <br /> <div className="line" />
              </div>
              <div className="nutrientsRecipe">
                {foodRecipes.recipe.totalNutrients.MG.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.MG.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.MG.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.K.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.K.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.K.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FE.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.FE.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.FE.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.ZN.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.ZN.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.ZN.unit}
                <br /> <div className="line" />
                {/* {foodRecipes.recipe.totalNutrients.P.label}<br />
            {foodRecipes.recipe.totalNutrients.P.quantity}{" "}
            {foodRecipes.recipe.totalNutrients.P.unit}<br /> */}
                {/* 
              {foodRecipes.recipe.totalNutrients.VITA_RAE.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITA_RAE.quantity}<br />
              {foodRecipes.recipe.totalNutrients.VITA_RAE.unit}
             */}
                {foodRecipes.recipe.totalNutrients.VITC.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.VITC.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.VITC.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.THIA.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.THIA.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.THIA.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.RIBF.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.RIBF.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.RIBF.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.NIA.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.NIA.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.NIA.unit}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.VITB6A.label}
                <br /> <div className="line" />
                {foodRecipes.recipe.totalNutrients.VITB6A.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.VITB6A.unit}
                <br /> <div className="line" />
                {/* 
              {foodRecipes.recipe.totalNutrients.FOLDFE.label}
              <br />
              {foodRecipes.recipe.totalNutrients.FOLDFE.quantity}<br />
              {foodRecipes.recipe.totalNutrients.FOLDFE.unit}
            </div> */}
                {/* 
              {foodRecipes.recipe.totalNutrients.VITB12.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITB12.quantity}<br />
              {foodRecipes.recipe.totalNutrients.VITB12.unit}
            </div> */}
                {/* 
              {foodRecipes.recipe.totalNutrients.VITD.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITD.quantity}<br />
              {foodRecipes.recipe.totalNutrients.VITD.unit}
             */}
                {foodRecipes.recipe.totalNutrients.TOCPHA.label}
                <br />
                {foodRecipes.recipe.totalNutrients.TOCPHA.quantity}{" "}
                {foodRecipes.recipe.totalNutrients.TOCPHA.unit}
                <br />
                {/* 
              {foodRecipes.recipe.totalNutrients.VITK1.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITK1.quantity}<br />
              {foodRecipes.recipe.totalNutrients.VITK1.unit}
            </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
