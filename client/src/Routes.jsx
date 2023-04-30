import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';

function AppRoutes() {
  return (
    <Routes>
    <Route path='/' element={<Menu />} />

  </Routes>
  )
}

export default AppRoutes