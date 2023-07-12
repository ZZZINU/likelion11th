import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { bigTheme, smallTheme } from './theme.jsx'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={bigTheme}>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
)
