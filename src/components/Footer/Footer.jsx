import React from 'react'
import "../Footer/Footer.css"

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from "react-router-dom"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className='mb-4' md="6">
          <div className='logo'>
              <div>
                <h1 className='text-white'>CrossDeck</h1>
              </div>
            </div>
            <p className="footer_text mt-4" >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere delectus vero eaque expedita magnam placeat quibusdam neque beatae fugiat dolor veniam excepturi voluptate voluptatibus recusandae corrupti assumenda harum, hic rerum.
            </p>
          </Col>
          <Col lg="3" md="3" className='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Contact
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to="#">Mobile Phones</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to="#">Modern Sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to="#">Arm Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to="#">Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </h4>
            </div>
          </Col>
          <Col lg="2" md="3" className='mb-4'>
          <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Useful Links
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to="#">Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to="#">Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to="#">Privacy Policy</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to="#">Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </h4>
            </div>
          </Col>
          <Col lg="1" md="4">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Contact
                <ListGroup className='footer_contact'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class='ri-map-pin-line'></i></span>
                    <p>123, Kahawa Sukari</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class='ri-phone-line'></i></span>
                    <p>123, Kahawa Sukari</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class='ri-mail-line'></i></span>
                    <p>crossdeck@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </h4>
            </div>
          </Col>
          <Col lg="12" className='mb-4'>
            <p className="footer_copyright">Copyright {year} developed by Ruth Mwalali. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer