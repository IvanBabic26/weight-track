import React from "react";
import "./BackToTop.css";

export default class BackToTop extends React.Component {
  state = {
    intervalId: 0
  };

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }

    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, this.props.delayInMs);

    this.setState({ intervalId: intervalId });
  };

  render() {
    return (
      <button title="Back to top" className="scroll" onClick={this.scrollToTop}>
        <span className="arrowUp" />
      </button>
    );
  }
}
