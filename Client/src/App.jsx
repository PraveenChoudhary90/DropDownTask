
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import State from './Pages/State'
import City from './Pages/City'
import Employee from './Pages/Employee'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='state' element={<State/>}/>
      <Route path='city' element={<City/>}/>
      <Route path='employee' element={<Employee/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
