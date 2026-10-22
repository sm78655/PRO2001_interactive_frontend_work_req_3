import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import type { EntertainmentItem } from '../types'

export default function EntertainmentCard({ item }: { item: EntertainmentItem }) {
  return (
    <Card className="h-100 gallery-card shadow-sm border-0">
      <Card.Img variant="top" src={item.image} alt={`${item.title} poster`} className="card-poster" />
      <Card.Body className="d-flex flex-column">
        <div className="mb-2"><Badge bg="secondary">{item.category}</Badge></div>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">{item.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
