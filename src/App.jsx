import './App.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarSection from './components/navbar'
import MenuList from './components/menu/menuList'


function App() {

  return (
    <div className="App">
    <NavbarSection />
      <Router>
        <Routes>
          <Route path="/" element={<MenuList />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
