import React from 'react'
import { useState } from 'react'
function App() {

  let [counterValue, setCounter] = useState(0) // useState is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that value.

  // let counterValue = 5

  const addValue = () => {
    console.log('Value before adding : ', counterValue)
    // counterValue += 1;

    setCounter(counterValue + 1) // setCounter is the function returned by useState that allows you to update the state value. When you call setCounter, React will re-render the component with the new state value.

  }


  const removeValue = () => {
    if(counterValue > 0){
      setCounter(counterValue - 1);
    }

    alert('Value cannot be less than 0');
  }

  return (
    <div>
      <h1>React Hooks</h1>
      <p>Hooks are functions that let you use state and other React features without writing a class.</p>

      <h2>Counter Value : {counterValue}</h2>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Decrease Value</button>
    </div>
  )
}

export default App
