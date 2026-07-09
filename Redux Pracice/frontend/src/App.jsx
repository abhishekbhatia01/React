import React from 'react'
import UseForm from './components/UserForm'
import { Route, Routes } from 'react-router-dom'
import UserList from './components/UserList'
const App = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <Routes>
        <Route path='/form' element={<UseForm />} />
        <Route path='/' element={<UserList />} />
      </Routes>
    </div>
  )
}

export default App
