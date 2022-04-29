import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <span>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.Increment(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.delete(this.props.counter.id)}
          className="btn btn-primary"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
