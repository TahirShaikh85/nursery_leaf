import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import AddNursery from './Pages/AddNursery';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/addnursery' element={<AddNursery/>}></Route>
      </Routes>
    </>
  )
}

export default App
