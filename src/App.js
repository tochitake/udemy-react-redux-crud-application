import userEvent from "@testing-library/user-event";
import React, { useReducer } from "react";
import PropTypes from 'prop-types';

/*function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="button" onClick={() => {console.log("i am clicked")}} />
    </React.Fragment>
  )

}*/

const App = () => {
  const profiles = [
    {name: "Taro", age:10}, 
    {name: "Hanako", age:6},
    {name: "Takeshi", age:12}
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>
  )
}

const User = (props) => {
  return <div>HI, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;