import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../views/Login/Login'
import Home from '../views/Home/Home'
import CustomLayout from '../views/Layout/Layout'
import Article from '../views/Article/Article'
import Demo from '../views/Function/Function'
import Comment from '../views/Comment/Comment'
import Album from '../views/Album/Album'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/article',
        element: <Article />
      },
      {
        path: '/function',
        element: <Demo />
      },
      {
        path: '/comment',
        element: <Comment />
      },
      {
        path: '/album',
        element: <Album />
      },
      {
        path: '/',
        redirectTo: '/home',
        element: <Home />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
])
export default router
