import { Component } from "react";

class Taymer extends Component {
  state = {
    secound: 0,
    checkStart: false,
    inputValue: "",
    interval: null,
  };

  componentDidUpdate = () => {
    console.log("ok componentDidUpdate");
    if (this.state.secound == 0) {
      clearInterval(this.state.interval);
      console.log("ok clear intervav");

      if (this.state.checkStart) {
        this.setState({
          checkStart: false,
        });
      }
    }
  };

  inputChangeValue = (e) => {
    console.log("inputValue: " + this.state.inputValue);

    this.setState({
      inputValue: e.target.value,
    });
  };

  startButtonEvent = (e) => {
    if (this.state.inputValue != "" && !this.state.checkStart) {
      console.log("start ok");
      this.setState({
        secound: this.state.inputValue,
        checkStart: true,
      });

      this.state.interval = setInterval(() => {
        this.setState({
          secound: this.state.secound - 1,
          inputValue: this.state.secound - 1,
        });
      }, 1000);
    }
  };
  stopButtonEvent = (e) => {
    console.log("stop ok");
    this.setState({
      checkStart: false,
    });

    clearInterval(this.state.interval);
    console.log("ok clear intervav");
  };
  deleteButtonEvent = (e) => {
    console.log("delete ok");
    this.setState({
      secound: 0,
      inputValue: "",
      checkStart: false,
    });

    clearInterval(this.state.interval);
    console.log("ok clear intervav");
  };

  render() {
    return (
      <div>
        {this.state.secound == 0 ? (
          <input type="text" onChange={this.inputChangeValue} />
        ) : (
          <h2>|{this.state.secound}|</h2>
        )}

        <div>
          {!this.state.checkStart ? (
            <button onClick={this.startButtonEvent}>Start</button>
          ) : (
            <button onClick={this.stopButtonEvent}>Stop</button>
          )}

          <button onClick={this.deleteButtonEvent}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Taymer;
