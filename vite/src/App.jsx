import './App.css'
import About from './Component/about'
import Contact from './Component/contact'
import Home from './Component/Home'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
      <h1>React router Example</h1>

      <nav style={{ marginButtom: "20px" }}>
        <Link to="/ style={{margin:10px}}"> Home</Link>
        <Link to="/About" style={{ margin: "10px" }}> About</Link>
        <Link to="/Contact" style={{ margin: "10px" }}> Contact</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
