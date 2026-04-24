import React from 'react'
import Card from './components/Card'
function App() {
  return (
    <>
   {/* Props (short for “properties”) in React are used to pass data from one component to another (usually parent → child). */}
      <h1 className='bg-green-400 text-2xl text-black  rounded-md'>Tailwind test && Props</h1>

      <Card myName="Jone Doe" />
      <Card myName="Jone uyas" />
      <Card myName="Jone Doasde" />
      <Card />
     
      
    </>
  )
}

export default App
