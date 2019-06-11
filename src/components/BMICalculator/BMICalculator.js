import React, { Component } from "react";
import "./BMICalculator.css";

export default class BMICalculator extends Component {
  state = {
    name: "",
    weight: "",
    height: "",
    bmi: "",
    message: "",
    optimalweight: "",
    formComplete: false
  };

  heightChange = e => {
    this.setState({ height: e.target.value });
    e.preventDefault();
  };

  blur = () => {
    this.calculateBMI();
  };

  weightChange = e => {
    this.setState({ weight: e.target.value });
    e.preventDefault();
  };

  calculateBMI = () => {
    const heightSquared = ((this.state.height / 100) * this.state.height) / 100;
    const bmi = this.state.weight / heightSquared;
    const low = Math.round(18.5 * heightSquared);
    const high = Math.round(24.99 * heightSquared);
    let message = "";

    if (bmi >= 18.5 && bmi <= 24.99) {
      message = " You are in a healthy weight range!";
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = " You are overweight!";
    } else if (bmi >= 30) {
      message = " You are obese!";
    } else if (bmi < 18.5) {
      message = " You are under weight!";
    }

    this.setState({
      message,
      optimalweight: ` Your suggested weight range is between ${low} - ${high}`,
      bmi: Math.round(bmi * 100) / 100
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.calculateBMI();
    this.setState({
      formComplete: true
    });
  };

  change = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="bmiCalc">
        <div className="bmiPage">
          <div className="bmiCalcWrapper">
            <div className="bmiCalcHeader">
              <h2>BMI Calculator</h2>
            </div>
            <form id="formBmi" onSubmit={this.submitForm}>
              <label>Please enter your name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onBlur={this.blur}
                onChange={this.change}
              />
              <label>Enter your age:</label>
              <input
                type="text"
                name="age"
                value={this.state.age}
                onBlur={this.blur}
              />
              <label>Sex:</label>
              <select className="selectOption">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label>Enter your height in cm:</label>
              <input
                type="text"
                name="height"
                value={this.state.height}
                onBlur={this.blur}
                onChange={this.heightChange}
              />
              <label>Enter your weight in kg:</label>
              <input
                type="text"
                name="weight"
                value={this.state.weight}
                onChange={this.weightChange}
              />
              <label>Don't be scared!</label>
              <input type="submit" className="btnSubmit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="bmiTextWrapper">
          <h1 className="bmiTextHeader">Body Mass Index</h1>

          <div className="bmiIntro">
            <h2 className="secondHeaderText">
              The BMI calculator is a useful tool that measures whether you are
              overweight, underweight, or just right. Your weight alone is not
              enough to tell, as a tall, skinny man may easily weigh more than a
              short but rotund woman. The body mass index, or BMI, overcomes
              this problem by finding a ratio of your weight to your height, and
              returning a single number. This number will fit into a category on
              the scale of BMI ranges, which are defined as underweight, normal,
              overweight, and obese.
            </h2>
            <h3 className="thirdHeaderText">
              At the left you can see our BMI calculator, there are fields for
              you to plug in your height and weight plus some other stuff. Plug
              in these values, and you'll instantly have your BMI and a little
              message telling you what range you fall into. Our BMI calculator
              makes it a piece of cake for you to find your number. However,
              please remember that BMI is a rough estimation. The result can be
              somewhat misleading for individuals who are well muscled (such as
              body builders), or for those who have lost a significant amount of
              muscle (such as the elderly).
            </h3>
          </div>
          <h2 className="outputHeader">
            Use the BMI calculator to see your Body Mass Index Ratio. The
            results are shown here:
          </h2>
          {this.state.formComplete && (
            <div className="outputBmi">
              {`Hello ${this.state.name}! Your BMI is currently `}
              {this.state.bmi}!{this.state.message}
              {this.state.optimalweight}.
            </div>
          )}
        </div>
      </div>
    );
  }
}
