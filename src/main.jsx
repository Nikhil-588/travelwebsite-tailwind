import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Tours from "./components/Tours"
//import Toogle from './components/Toogle.jsx'
import App from './App.jsx'
import Event from './components/Event.jsx'
import NotFetchapi from './States/NotFetchapi.jsx'
import Cleanup from './States/Cleanup.jsx';
//import Use from './States/Use.jsx'
//import Shortcircuit from './components/shortcircuit.jsx'
//import Useeffect1 from './States/Useeffect1.jsx'
//import Toggle from './components/Toogle.jsx'
//import { FaArrowsToDot } from 'react-icons/fa6'
//import Todo from './components/Todo.jsx'
//import Todo from './components/Todo.jsx'
//import Usetime from './States/Usetime.jsx'
//import Home from './components/Home.jsx'
import Emusa from './components/Emusa.jsx'
//import Lifting from './components/lifting.jsx'
//import Lifting from './components/lifting.jsx'
//import Todo from './components/Todo.jsx'
//import Time from './components/Time.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)