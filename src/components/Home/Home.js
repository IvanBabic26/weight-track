import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import calculator from "../img/calculator.png";
import scale from "../img/scale.png";
import nutrition from "../img/nutrition.png";
import training from "../img/training.png";

export default class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="homeTextWrapper">
          <h1 className="homeHeader">Weight Track App: A Work In Progress</h1>
          <div className="homeMsg">
            <h2>
              With the free weight tracker app from Bakuta, you can check your
              BMI and your Calorie Input as well as finding the nutrition values
              for the food you eat. Also check out our training log, enter you
              activity and see how many calories you've expended. The app is a
              small helper to achieving your weight goals and get in shape!
            </h2>
            <h2 className="browseTabs">BROWSE WHAT YOUR HEART DESIRES</h2>
            <div className="tabPage">
              <div className="tabs">
                <Link to="/bmiCalculator">
                  <div className="imageTab">
                    <img alt="scale" src={scale} />
                  </div>
                  <h3 className="headerTab">Get your BMI easy</h3>
                  <h4 className="secondHeaderTab">
                    Go and see where you need to start, make the first step, you
                    can do it.
                  </h4>
                </Link>
              </div>
              <div className="tabs">
                <Link to="/calorieCalculator">
                  <div className="imageTab">
                    <img alt="calculator" src={calculator} />
                  </div>
                  <h3 className="headerTab">Calorie Calculator</h3>
                  <h4 className="secondHeaderTab">
                    Get that calorie count and jump on to burn them or better
                    yet, gain some more!
                  </h4>
                </Link>
              </div>
              <div className="tabs">
                <Link to="/nutritionValue">
                  <div className="imageTab">
                    <img alt="nutrition" src={nutrition} />
                  </div>
                  <h3 className="headerTab">Nutrition is key</h3>
                  <h4 className="secondHeaderTab">
                    Track every food you consume and know what each of those
                    things hold.
                  </h4>
                </Link>
              </div>
              <div className="tabs">
                <Link to="/trainingLog">
                  <div className="imageTab">
                    <img alt="training" src={training} />
                  </div>
                  <h3 className="headerTab">Exercise your body</h3>
                  <h4 className="secondHeaderTab">
                    Enter every activity you've done and see how much calories
                    you burned!
                  </h4>
                </Link>
              </div>
            </div>
            <h4 className="bottomText">
              Take on a small journey and starting losing or even better gaining weight in the right order!
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
