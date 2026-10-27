import React, { Component } from "react";
export default class Counter extends Component {
  setCounterValue = () => {
    const { value } = this.props;
    return value === 0 ? "Zero" : value;
  };
  setSpanClasses = () => {
    let classes = "badge m-2 text-bg-";
    return this.props.value === 0
      ? (classes += "warning")
      : (classes += "primary");
  };

  render() {
    const { id, value, onDecrement, onIncrement, onDelete } = this.props;
    return (
      <div className="row align-items-center">
        <div className="col-1">
          <span className={this.setSpanClasses()}>
            {this.setCounterValue()}
          </span>
        </div>
        <div className="col">
          <button
            type="button"
            disabled={value === 0}
            onClick={() => onDecrement(id)}
            className="btn btn-secondary m-2"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => onIncrement(id)}
            className="btn btn-secondary m-2"
          >
            +
          </button>
          <button
            onClick={() => onDelete(id)}
            type="button"
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
