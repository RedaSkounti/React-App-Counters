import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };

  handleDecrement = (counterId) => {
    const counters = this.state.counters.map((c) =>
      c.id === counterId ? { ...c, value: c.value - 1 } : c,
    );
    this.setState({ counters });
  };

  handleIncrement = (counterId) => {
    const counters = this.state.counters.map((c) =>
      c.id === counterId ? { ...c, value: c.value + 1 } : c,
    );
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => ({ ...c, value: 0 }));
    this.setState({ counters });
  };
  
  render() {
    return (
      <>
        <Navbar
          totalItems={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container pt-3">
          <Counters
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </>
    );
  }
}