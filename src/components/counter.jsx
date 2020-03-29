import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    console.log(this.props);

    return (
      <div style={{ margin: 50 }}>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className={"btn btn-secondary btn-sm m-2"}
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className={"btn btn-secondary btn-sm m-2"}
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
