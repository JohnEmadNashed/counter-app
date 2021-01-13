import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary  btn-sm"
        >
          Increment
        </button>
        <ul>{}</ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
