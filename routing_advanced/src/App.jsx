import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import SimplePage from './pages/SimplePage.jsx'
import PracticePage from './pages/PracticePage.jsx'
import AdvancedPage from './pages/AdvancedPage.jsx'
import AdvancedDetails from './pages/AdvancedDetails.jsx'

const activeStyle = {
  fontWeight: 'bold',
  color: '#2e7d32',
}

function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
          Home
        </NavLink>
        {' | '}
        <NavLink to="/simple" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Simple
        </NavLink>
        {' | '}
        <NavLink to="/practice" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Practice
        </NavLink>
        {' | '}
        <NavLink to="/advanced" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Advanced
        </NavLink>
      </header>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simple" element={<SimplePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/advanced" element={<AdvancedPage />}>
            <Route path="details/:id" element={<AdvancedDetails />} />
            <Route index element={<p>Select details in advanced router.</p>} />
          </Route>
          <Route path="*" element={<p>404 - route not found</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
