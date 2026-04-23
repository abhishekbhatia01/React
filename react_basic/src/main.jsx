import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const customElement = (
//   // <a href='www.google.com' target='_blank'>Visit google</a
// )

// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   'Click me'
// )

createRoot(document.getElementById('root')).render(
  <App />
)
