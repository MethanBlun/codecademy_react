import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Article from './Article.jsx'
import './index.css'
import './test.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { <App /> }
    { <Article/> }
  </React.StrictMode>,
)
