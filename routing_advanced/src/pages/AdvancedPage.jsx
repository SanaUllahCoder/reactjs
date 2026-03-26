import { Outlet, Link } from 'react-router-dom'

export default function AdvancedPage() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Advanced Router</h2>
      <p>Has nested routes and dynamic params.</p>

      <nav style={{ marginBottom: '1rem' }}>
        <Link to="details/1" style={{ marginRight: '0.5rem' }}>Details #1</Link>
        <Link to="details/2" style={{ marginRight: '0.5rem' }}>Details #2</Link>
        <Link to="..">Back to main</Link>
      </nav>

      <Outlet />
    </div>
  )
}
