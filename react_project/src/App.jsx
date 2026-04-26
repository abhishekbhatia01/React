import React from 'react'

function App() {

  const [color, setColor] = React.useState('bg-gray-900');

  function changeColor(newColor){
    setColor(newColor);
  }

  return (
    <div className={`min-h-screen ${color} flex items-center justify-center transition-all duration-500`}>

      <div className='bg-white/90 backdrop-blur-md shadow-2xl p-6 rounded-2xl flex flex-wrap gap-4 justify-center'>

        <button onClick={() => changeColor('bg-green-500')} className='bg-green-500 px-6 py-3 text-lg font-bold rounded-xl text-white hover:scale-105 transition'>Green</button>

        <button onClick={() => changeColor('bg-red-500')} className='bg-red-500 px-6 py-3 text-lg font-bold rounded-xl text-white hover:scale-105 transition'>Red</button>

        <button onClick={() => changeColor('bg-blue-500')} className='bg-blue-500 px-6 py-3 text-lg font-bold rounded-xl text-white hover:scale-105 transition'>Blue</button>

        <button onClick={() => changeColor('bg-purple-500')} className='bg-purple-500 px-6 py-3 text-lg font-bold rounded-xl text-white hover:scale-105 transition'>Purple</button>

        <button onClick={() => changeColor('bg-yellow-400')} className='bg-yellow-400 px-6 py-3 text-lg font-bold rounded-xl text-black hover:scale-105 transition'>Yellow</button>

        <button onClick={() => changeColor('bg-pink-500')} className='bg-pink-500 px-6 py-3 text-lg font-bold rounded-xl text-white hover:scale-105 transition'>Pink</button>

        <button onClick={() => changeColor('bg-orange-500')} className='bg-orange-500 px-6 py-3 text-lg font-bold rounded-xl text-white hover:scale-105 transition'>Orange</button>

        <button onClick={() => changeColor('bg-black')} className='bg-black px-6 py-3 text-lg font-bold rounded-xl text-white hover:scale-105 transition'>Black</button>

      </div>

    </div>
  )
}

export default App