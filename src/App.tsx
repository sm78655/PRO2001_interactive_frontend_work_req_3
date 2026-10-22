import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { entertainmentItems } from './data/entertainment'
import EntertainmentCard from './components/EntertainmentCard'

export default function App() {
  return (
    <>
      <header className="hero-section">
        <Container>
          <p className="eyebrow">PRO2001 · Work Requirement 3</p>
          <h1>Entertainment Gallery</h1>
          <p className="hero-copy">A responsive collection of entertainment cards built with React, TypeScript, and React Bootstrap.</p>
        </Container>
      </header>

      <main>
        <Container className="py-5">
          <Row className="g-4">
            {entertainmentItems.map((item) => (
              <Col key={item.id} xs={12} md={6} lg={4}>
                <EntertainmentCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer className="site-footer">
        <Container><p className="mb-0">Built by Sameer Ahmad Mustafa for PRO2001 Interactive Frontend</p></Container>
      </footer>
    </>
  )
}
