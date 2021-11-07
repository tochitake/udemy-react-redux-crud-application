import React, {Component} from "react";

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }
handlePlusButton = () => {
  const currentCount = this.state.count
  this.setState({count: currentCount + 1 })
}
handleMinusButton = () => {
  const currentCount = this.state.count
  this.setState({count: currentCount - 1 })
}

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;