import React, { Component } from "react";
import "./Home.css";
import phone from "../img/phone.png";
import ios from "../img/ios.png";
import android from "../img/android.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="homePhoneWrapper">
          <img alt="mobilephone" src={phone} />
        </div>
        <div className="homeTextWrapper">
          <h1 className="homeHeader">
            Weight Track App: Free for Android and iPhone
          </h1>
          <div className="homeMsg">
            <h2>
              With the free weight tracker app from Bakuta, you can check your <Link to="/bmicalculator">BMI</Link> and your <Link to="/caloriecalculator">Calorie Input</Link> as well finding your meal plans and training plans. The app is
              available for iPhone and Android, you can view both your meal and
              training schedule at any time!
            </h2>
            <ul className="listItems">
              <li>Get in shape quick and easy</li>
              <li>Find your diet</li>
              <li>Fast and easy to use</li>
            </ul>
            <h4 className="downloadSec">
              Download now for free from the Google Play or App Store:
            </h4>
                <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer"> <img alt="appstore" className="iosLogo" src={ios} /></a>{" "}
                <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer"> <img alt="androidgoogleplay" className="androidLogo" src={android} /></a>
          </div>
        </div>
      </div>
    );
  }
}
