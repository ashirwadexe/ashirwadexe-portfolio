import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
