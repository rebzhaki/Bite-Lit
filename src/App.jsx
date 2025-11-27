import './App.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarSection from './components/navbar'
import MenuList from './components/menu/menuList'
import { SearchProvider } from './context/searchContext'


function App() {

  return (
    <div className="App">
      <SearchProvider>
      <NavbarSection />
      <Router>
        <Routes>
          <Route path="/" element={<MenuList />} />
        </Routes>

      </Router>
      </SearchProvider>
   
    </div>
  )
}

export default App
