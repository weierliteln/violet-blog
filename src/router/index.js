import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../views/Login/Login'
import Home from '../views/Home/Home'
import CustomLayout from '../views/layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomLayout />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
])
export default router
