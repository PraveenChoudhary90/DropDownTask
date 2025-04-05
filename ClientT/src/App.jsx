
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Country from './Pages/Country'
import State from './Pages/State'
import City from './Pages/City'
import Display from './Pages/Display'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='country' element={<Country/>}/>
      <Route path='state' element={<State/>}/>
      <Route path='city' element={<City/>}/>
      <Route path='display' element={<Display/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
