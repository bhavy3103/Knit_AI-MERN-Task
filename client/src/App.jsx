// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePlan from './pages/CreatePlan'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreatePlan />}></Route>
      </Routes>

    </BrowserRouter >
  )
}

export default App
