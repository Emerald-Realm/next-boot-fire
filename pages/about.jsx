import { Container, Typography, Card, Row, Col } from 'react-bootstrap'
import aboutCoreValues from './components/api/aboutData'



function about() {
  return (
    <>
      <div className="about-page px-4">
        about us
        <div className="our-mission pt-4">
          <p>Our Mission</p>
          <p className="mission-text">
            BookSelf is dedicated to making the world a better place, one book at a time, through sustainable practices, innovative print-on-demand products, and a commitment to excellent service.
          </p>
        </div>
        <div className="origin-story pt-4">
          <p className="origin-title">Our Origin Story</p>
          <p className="origin-text">
            After successfully navigating a hard and pricy system in1999, our founder, Barnes Young, discovered it was impossible to publish his amazing story through any of the traditional publishing sites and houses. Determined to share his story, and BookSelf was born.
          </p>
        </div>
        <div className="core-values pt-4">
          <p className="core-values-title">Our Core Values</p>
          <p className="core-values-text">
            BookSelf is a company built on four core values that represent who we are and why we believe in the work we do.
          </p>
          <Row className="p-4 g-2">
            {aboutCoreValues.map((card) =>
              <Col key={card.id} className='col-12 col-md-3'>
                <Card className="core-values-card outlined">
                  <Card.Header className='p-1 rounded-top' ></Card.Header>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </div>
      </div>
    </>
  )
}

export default about
