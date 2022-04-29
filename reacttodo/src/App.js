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

  onDelete = (id) => {
    let resulto = this.state.counters.filter(counter => counter.id !== id)
    console.log(resulto);
    this.setState({ counters: resulto });
  }

  reset = () => {
    const res = this.state.counters.map(counter => counter.value = 0)
    console.log(res);
    this.setState({ res });

  }


  render() {
    return (
      <div className="container m-2">
        <button onClick={this.reset} className="btn btn-primary">Reset</button>
        {this.state.counters.map(counter => <Counter
          key={counter.id}
          delete={this.onDelete}
          Increment={this.onIncrement}
          counter={counter}
        />)
        }
      </div>
    )
  }
}

export default App;