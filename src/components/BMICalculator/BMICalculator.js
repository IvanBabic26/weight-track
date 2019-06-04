import React, { Component } from "react";
import "./BMICalculator.css";

class BMICalculator extends Component {
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
      formComplete: true,
      
    });

  };

  change = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="bmicalc">
        <div className="bmicalcHeader">
          <h2>BMI Calculator</h2>
        </div>
        <form id="wrapper" onSubmit={this.submitForm}>
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
        {this.state.formComplete && (
          <div className="outputbmi">
            {this.state.checked} Hello {this.state.name}! Your BMI is currently{" "}
            {this.state.bmi}!{this.state.message}
            {this.state.optimalweight}.
          </div>
        )}
      </div>
    );
  }
}

export default BMICalculator;
