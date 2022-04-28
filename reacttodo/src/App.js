import React, { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }


  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    // console.log(counters);
    const index = counters.indexOf(counter);
    // counters[0] = {id:1,value:4}
    counters[index] = { ...counter };
    // console.log(counters[index]);
    counters[index].value++;
    this.setState({ counters });
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => <Counter
          key={counter.id}
          Increment={this.onIncrement}
          counter={counter}
        />)
        }
      </div>
    )
  }
}

export default App;