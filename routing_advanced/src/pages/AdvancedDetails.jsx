import { useParams } from 'react-router-dom'

export default function AdvancedDetails() {
  const { id } = useParams()

  return (
    <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
      <h3>Advanced Details</h3>
      <p>Dynamic id param: {id}</p>
    </div>
  )
}
