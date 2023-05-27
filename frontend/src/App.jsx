import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import AddNursery from './components/AddNursery';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addnursery' element={<AddNursery/>}></Route>
      </Routes>
    </>
  )
}

export default App
