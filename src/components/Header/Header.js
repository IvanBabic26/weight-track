import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    
    render() {
        return(
            <div className="headerbar">
                    <a href="#bmicalculator">BMI Calculator</a>
                    <a href="#mealplan">Meal Plan</a>
                    <a href="#desiredgoals">Desired Goals</a>
                    {/* <a href="#recepies">Recepies</a> */}
            </div>
        );
    }
}

export default Header;