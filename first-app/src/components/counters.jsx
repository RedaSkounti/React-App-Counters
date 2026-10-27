import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
      const { onDecrement, onIncrement, onDelete, onReset, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary ">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onDelete={onDelete}
           
          />
        ))}
      </div>
    );
  }
}
