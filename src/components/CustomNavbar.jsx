import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <>
    
    <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="fa-brands fa-apple" style={{ color: 'black', fontSize: '22px' }}></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 gap-3 d-flex justify-content-between">
              <Nav.Link 
                className="Store" 
                as={Link} 
                to="/store"
              >
                Store
              </Nav.Link>
              <Nav.Link className="Mac" as={Link} to="/mac">Mac</Nav.Link>
              <Nav.Link className="iPad" as={Link} to="/ipad">iPad</Nav.Link>
              <Nav.Link className="iPhone" as={Link} to="/iphone">iPhone</Nav.Link>
              <Nav.Link className="Watch" as={Link} to="/watch">Watch</Nav.Link>
              <Nav.Link className="AirPods" as={Link} to="/airPods">AirPods</Nav.Link>
              <Nav.Link className="TV&Home" as={Link} to="/TV&Home">TV&Home</Nav.Link>
              <Nav.Link className="Entertainment" as={Link} to="/Entertainment">Entertainment</Nav.Link>
              <Nav.Link className="Accessories" as={Link} to="/Accessories">Accessories</Nav.Link>
              <Nav.Link className="Support" as={Link} to="/Support">Support</Nav.Link>
              <Nav.Link><IoSearch style={{ fontSize: '18px', marginLeft: '12px' }} /></Nav.Link>
              <Nav.Link><IoBagOutline style={{ fontSize: '18px', marginLeft: '12px' }} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="dropdownitems pt-4">
        <div className="storedropdown">
          <Container>
            <Row>
              <Col lg={3} className='stored'>
                <ul>
                  <li className='storedd'><p style={{color:'grey'}}>Shop</p></li>
                  <li className='storedd'><h3>Shop the latest</h3></li>
                  <li className='storedd'><h3>Mac</h3></li>
                  <li className='storedd'><h3>iPad</h3></li>
                  <li className='storedd'><h3>iPhone</h3></li>
                  <li className='storedd'><h3>Apple Watch</h3></li>
                  <li className='storedd'><h3>Accessories</h3></li>
                </ul>
              </Col>
              <Col lg={2}>
                <ul>
                  <li className='storedd'><p style={{color:'grey'}}>Quick Links</p></li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Find a store</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Order Status</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Ways to Buy</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>University Student Offer</li>
                </ul>
              </Col>
              <Col lg={3}>
                <ul>
                  <li className='storedd'><p style={{color:'grey'}}>Shop special stores</p></li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>EDUCATION</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>BUSINESS</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="macdropdown">
          <Container>
            <Row>
              <Col lg={3} className='stored'>
                <ul>
                  <li className='storedd'><p style={{color:'grey'}}>Explore Mac</p></li>
                  <li className='storedd'><h3>Explore All Mac</h3></li>
                  <li className='storedd'><h3>MacBook Air</h3></li>
                  <li className='storedd'><h3>MacBook Pro</h3></li>
                  <li className='storedd'><h3>iMac</h3></li>
                  <li className='storedd'><h3>Mac mini</h3></li>
                  <li className='storedd'><h3>Mac Studio</h3></li>
                  <li className='storedd'><h3>Mac Pro</h3></li>
                  <li className='storedd'><h3>Displays</h3></li>
                  <li className='storedd'>Compare Mac</li>
                  <li className='storedd'>Mac does that</li>
                </ul>
              </Col>
              <Col lg={2}>
                <ul>
                  <li className='storedd'><p style={{color:'grey'}}>Shop Mac</p></li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Shop Mac</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Mac accessories</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Ways to Buy</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>University Student Offer</li>
                </ul>
              </Col>
              <Col lg={3}>
                <ul>
                  <li className='storedd'><p style={{color:'grey'}}>More from Mac</p></li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Mac support</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>AppleCare+ for mac</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>macOS Sequcia Preview</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Apple Intelligence</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Apps by Apple </li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Connectivity</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>iCloud+</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Mac for business</li>
                  <li className='storedd' style={{fontSize:'12px',fontWeight:'bold'}}>Education</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div> */}
    </>
  );
}

export default CustomNavbar;
