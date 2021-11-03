import React from "react";

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="button" onClick={() => {console.log("i am clicked")}} />
    </React.Fragment>
  )

}

export default App;