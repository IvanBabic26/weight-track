import React, { Component } from "react";
import "./DisplayCase.css";
import request from "superagent";

export default class DisplayCase extends Component {
  state = {
    someRecipes: []
  };
  componentDidMount() {
    console.log("test");
  }


  displayRecipe = (recipeName) => {
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
          this.setState({ err });
        } else {
          this.setState({ someRecipes: res.body.hits });
          console.log(res);
        }
      });
  };

  render() {
    return (
      <div className="displayCase">
        <input
          type="submit"
          className="btnSubmitNutri"
          value="Submit"
          onClick={this.displayRecipe}
        />
        {this.state.someRecipes.map(foodRecipes => (
          <div key={foodRecipes.food_name} className="outputDisplay">
            <div className="selectedFood">
              <div className="foodImg">
                <img
                  src={foodRecipes.recipe.image}
                  alt="recipePic"
                  className="foodImg"
                />
              </div>
              <div className="foodName">{` ${foodRecipes.recipe.label} `}</div>
            </div>
            <h1>Recipe</h1>

            <div className="bar1" />
            {`Serving Quantity: ${foodRecipes.recipe.yield}`}

            <div className="line">
              {`Total Weight: ${foodRecipes.recipe.totalWeight} g`}{" "}
            </div>
            <div className="line">
              {`Total Time: ${foodRecipes.recipe.totalTime} min`}{" "}
            </div>
            <div className="bar1" />
            <div>{`Diet Label: ${foodRecipes.recipe.dietLabels}`}</div>
            <div className="line">{`Health Label: ${
              foodRecipes.recipe.healthLabels
            }`}</div>
            <div className="line">
              {`Cautions: ${foodRecipes.recipe.cautions}`}{" "}
            </div>

            <div className="bar2" />

            {`Ingredients: ${foodRecipes.recipe.ingredientLines}`}
            <div className="bar2" />

            {`Total Nutrients:`}
            <br />
            <div className="line">
              {foodRecipes.recipe.totalNutrients.ENERC_KCAL.label}
              <br />
              {foodRecipes.recipe.totalNutrients.ENERC_KCAL.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.ENERC_KCAL.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.FAT.label}
              <br />
              {foodRecipes.recipe.totalNutrients.FAT.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.FAT.unit}
            </div>
            <div className="line indent">
              {foodRecipes.recipe.totalNutrients.FASAT.label}
              <br />
              {foodRecipes.recipe.totalNutrients.FASAT.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.FASAT.unit}
            </div>
            {/* <div className="line indent">
              {foodRecipes.recipe.totalNutrients.FATRN.label}
              <br />
              {foodRecipes.recipe.totalNutrients.FATRN.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.FATRN.unit}
            </div> */}
            <div className="line indent">
              {foodRecipes.recipe.totalNutrients.FAPU.label}
              <br />
              {foodRecipes.recipe.totalNutrients.FAPU.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.FAPU.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.CHOCDF.label}
              <br />
              {foodRecipes.recipe.totalNutrients.CHOCDF.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.CHOCDF.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.FIBTG.label}
              <br />
              {foodRecipes.recipe.totalNutrients.FIBTG.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.FIBTG.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.SUGAR.label}
              <br />
              {foodRecipes.recipe.totalNutrients.SUGAR.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.SUGAR.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.PROCNT.label}
              <br />
              {foodRecipes.recipe.totalNutrients.PROCNT.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.PROCNT.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.NA.label}
              <br />
              {foodRecipes.recipe.totalNutrients.NA.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.NA.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.CA.label}
              <br />
              {foodRecipes.recipe.totalNutrients.CA.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.CA.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.MG.label}
              <br />
              {foodRecipes.recipe.totalNutrients.MG.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.MG.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.K.label}
              <br />
              {foodRecipes.recipe.totalNutrients.K.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.K.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.FE.label}
              <br />
              {foodRecipes.recipe.totalNutrients.FE.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.FE.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.ZN.label}
              <br />
              {foodRecipes.recipe.totalNutrients.ZN.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.ZN.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.P.label}
              <br />
              {foodRecipes.recipe.totalNutrients.P.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.P.unit}
            </div>
            {/* <div className="line">
              {foodRecipes.recipe.totalNutrients.VITA_RAE.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITA_RAE.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.VITA_RAE.unit}
            </div> */}
            <div className="line">
              {foodRecipes.recipe.totalNutrients.VITC.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITC.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.VITC.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.THIA.label}
              <br />
              {foodRecipes.recipe.totalNutrients.THIA.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.THIA.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.RIBF.label}
              <br />
              {foodRecipes.recipe.totalNutrients.RIBF.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.RIBF.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.NIA.label}
              <br />
              {foodRecipes.recipe.totalNutrients.NIA.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.NIA.unit}
            </div>
            <div className="line">
              {foodRecipes.recipe.totalNutrients.VITB6A.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITB6A.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.VITB6A.unit}
            </div>
            {/* <div className="line">
              {foodRecipes.recipe.totalNutrients.FOLDFE.label}
              <br />
              {foodRecipes.recipe.totalNutrients.FOLDFE.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.FOLDFE.unit}
            </div> */}
            {/* <div className="line">
              {foodRecipes.recipe.totalNutrients.VITB12.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITB12.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.VITB12.unit}
            </div> */}
            {/* <div className="line">
              {foodRecipes.recipe.totalNutrients.VITD.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITD.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.VITD.unit}
            </div> */}
            <div className="line">
              {foodRecipes.recipe.totalNutrients.TOCPHA.label}
              <br />
              {foodRecipes.recipe.totalNutrients.TOCPHA.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.TOCPHA.unit}
            </div>
            {/* <div className="line">
              {foodRecipes.recipe.totalNutrients.VITK1.label}
              <br />
              {foodRecipes.recipe.totalNutrients.VITK1.quantity}{" "}
              {foodRecipes.recipe.totalNutrients.VITK1.unit}
            </div> */}
          </div>
        ))}
      </div>
    );
  }
}
