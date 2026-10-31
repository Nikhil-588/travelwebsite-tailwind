import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Tours from "./components/Tours"
//import Toogle from './components/Toogle.jsx'
import App from './App.jsx'
import Todo from './components/Todo.jsx'
//import Todo from './components/Todo.jsx'
//import Home from './components/Home.jsx'
//import Lifting from './components/lifting.jsx'
//import Lifting from './components/lifting.jsx'
//import Todo from './components/Todo.jsx'
//import Time from './components/Time.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Todo/>
  </StrictMode>,
)