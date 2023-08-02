import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6} style={{ marginTop: '20px' }}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{ marginTop: '20px' }} >
            {/* <div className="social-icon">
              <a href="https://www.facebook.com/josiah.masangkay.583/"><img src={navIcon2} alt="" /></a>
              <a href="https://www.linkedin.com/in/josiah-richand-masangkay-7373b9285/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/_ciaa_h/"><img src={navIcon3} alt="Icon" /></a>
            </div> */}
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
