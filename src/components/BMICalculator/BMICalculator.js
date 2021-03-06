import React from "react";
import "./BMICalculator.css";
import ghost from "../img/ghost.png";

export default class BMICalculator extends React.Component {
  state = {
    name: "",
    age: "",
    sex: "Male",
    weight: "",
    height: "",
    bmi: "",
    message: "",
    optimalWeight: "",
    formComplete: false
  };

  componentWillMount() {
    this.checkIfInfoIsAlreadyEntered();
  }

  changeValue = (e, name) => {
    e.preventDefault();

    this.setState({ [name]: e.target.value });
  };

  blur = () => {
    this.calculateBMI();
  };

  checkIfInfoIsAlreadyEntered = () => {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const sex = localStorage.getItem("sex");
    const height = localStorage.getItem("height");
    const weight = localStorage.getItem("weight");
    if (name !== null) {
      this.setState({
        name: name,
        age: age,
        sex: sex,
        height: height,
        weight: weight
      });
    }
  };

  calculateBMI = () => {
    const heightSquared = ((this.state.height / 100) * this.state.height) / 100;
    const bmi = this.state.weight / heightSquared;
    const low = Math.round(18.5 * heightSquared);
    const high = Math.round(24.99 * heightSquared);
    let message = "";

    // /TODO: switch BMI
    // switch (bmi) {
    //   case (bmi >= 18.5 && bmi <= 24.99):
    //     return " You are in a healthy weight range!";

    //   case (bmi >= 25 && bmi <= 29.9):
    //     return " You are overweight!";

    //   case (bmi >= 30):
    //     return" You are obese!";

    //   default:
    //     return " You are under weight!";

    // }

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
      optimalWeight: ` Your suggested weight range is between ${low} - ${high}`,
      bmi: Math.round(bmi * 100) / 100
    });
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("age", this.state.age);
    localStorage.setItem("sex", this.state.sex);
    localStorage.setItem("height", this.state.height);
    localStorage.setItem("weight", this.state.weight);
  };

  submitForm = e => {
    e.preventDefault();

    this.calculateBMI();
    this.setState({
      formComplete: true
    });
  };

  render() {
    localStorage.setItem("bmi", this.state.bmi);
    localStorage.setItem("message", this.state.message);
    localStorage.setItem("optimalWeight", this.state.optimalWeight);
    const { name, age, weight, height } = this.state;
    const isEnabled =
      name.length > 0 &&
      age.length > 0 &&
      height.length > 0 &&
      weight.length > 0;

    return (
      <div className="bmiCalc">
        <div className="bmiPage">
          <div className="bmiFormCalc">
            <div className="bmiHeader">
              <h2>BMI Calculator</h2>
            </div>
            <form id="formBmi" onSubmit={this.submitForm}>
              <label>Please enter your name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.changeValue(e, "name")}
                required
              />
              <label>Enter your age:</label>
              <input
                className="inputNumber"
                type="number"
                min="0"
                max="99"
                name="age"
                value={this.state.age}
                onChange={e => this.changeValue(e, "age")}
                required
              />
              <label>Sex:</label>
              <select
                value={this.state.sex}
                onChange={e => this.changeValue(e, "sex")}
                className="selectOption"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label>Enter your height in cm:</label>
              <input
                className="inputNumber"
                type="number"
                min="20"
                max="250"
                name="height"
                value={this.state.height}
                onChange={e => this.changeValue(e, "height")}
                required
              />
              <label>Enter your weight in kg:</label>
              <input
                className="inputNumber"
                type="number"
                min="0"
                max="300"
                name="weight"
                value={this.state.weight}
                onChange={e => this.changeValue(e, "weight")}
                required
              />
              <label>Don't be scared!</label>
              <input
                type="submit"
                className="btnSubmit"
                value="Submit"
                disabled={!isEnabled}
              />
            </form>
          </div>
        </div>
        <div className="bmiTextWrapper">
          <h1 className="bmiTextHeader">Body Mass Index</h1>

          <div className="bmiIntro">
            <p className="secondHeaderText">
              The BMI calculator is a useful tool that measures whether you are
              overweight, underweight, or just right. Your weight alone is not
              enough to tell, as a tall, skinny man may easily weigh more than a
              short but rotund woman. The body mass index, or BMI, overcomes
              this problem by finding a ratio of your weight to your height, and
              returning a single number. This number will fit into a category on
              the scale of BMI ranges, which are defined as underweight, normal,
              overweight, and obese.
            </p>
            <p className="thirdHeaderText">
              At the left you can see our BMI calculator, there are fields for
              you to plug in your height and weight plus some other stuff. Plug
              in these values, and you'll instantly have your BMI and a little
              message telling you what range you fall into. Our BMI calculator
              makes it a piece of cake for you to find your number. However,
              please remember that BMI is a rough estimation. The result can be
              somewhat misleading for individuals who are well muscled (such as
              body builders), or for those who have lost a significant amount of
              muscle (such as the elderly).
            </p>
          </div>
          <p className="outputHeader">
            Use the BMI calculator to see your Body Mass Index Ratio. The
            results are shown here:
          </p>
          {this.state.formComplete && (
            <div className="outputBmi">
              <div className="bmiImage">
                <img src={ghost} alt="ghost" />
              </div>
              <div className="bmiMessage">
                {`Hello ${this.state.name}! Your BMI is currently 
              ${this.state.bmi}!${this.state.message}
              ${this.state.optimalWeight} kg.
              See, it wasn't that scary, was it now?`}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
