import React, {Component} from "react";
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={ props.increment}>+1</button>
        <button onClick={ props.decrement}>-1</button>
      </React.Fragment>
    )
  }



  /*  constructor(props){
    super(props)
    this.state = {count: 0}
  }
*/
/*
handlePlusButton = () => {
  const currentCount = this.state.count
  this.setState({count: currentCount + 1 })
}
handleMinusButton = () => {
  const currentCount = this.state.count
  this.setState({count: currentCount - 1 })
}*/
/*
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
*/
}

const mapStateToProps = state => ({ value: state.count.value }) 
/*const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})*/

const mapDispatchToProps = ({ increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)
