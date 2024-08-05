import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="footer bg-light">
    <Container className="pt-4 pb-4 ps-5 pe-5">
    <div className=''>
     <span>‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. <a href="" className='text-dark'> Terms apply.</a></span>
    <p className='pt-3'>Representative example:</p>
    <p className='mb-1'>Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.</p>
   <p>Based on a 24-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹11242.00, paid over 24 months as 24 monthly payments of ₹3329.00.</p>
   <p className='mb-3'>*Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions herein.</p>
   <p className='mb-2'>1. Apple Intelligence will be available in beta on iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1 and later, with Siri and device language set to US English, as part of iOS 18, iPadOS 18 and macOS Sequoia later this year.</p>
   <p className='mb-2'>Some features, additional languages and platforms will be coming over the course of the next year.</p>
   <p>A subscription is required for Apple TV+.</p>
    </div>
    <hr />
      <Row className="d-md-none"> {/* Only visible on small screens */}
        <Col lg={5}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Shop and Learn</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>Store</li>
                  <li>Mac</li>
                  <li>iPad</li>
                  <li>iPhone</li>
                  <li>Watch</li>
                  <li>AirPods</li>
                  <li>TV & Home</li>
                  <li>AirTag</li>
                  <li>Accessories</li>
                  <li>Gift Cards</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Apple Wallet</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>Wallet</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Account</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>Manage Your Apple ID</li>
                  <li>Apple Store Account</li>
                  <li>iCloud.com</li>
                </ul>
                <h6 className="font-weight-bold mt-4">Entertainment</h6>
                <ul className="list-unstyled">
                  <li>Apple One</li>
                  <li>Apple TV+</li>
                  <li>Apple Music</li>
                  <li>Apple Arcade</li>
                  <li>Apple Podcasts</li>
                  <li>Apple Books</li>
                  <li>App Store</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Apple Store</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>Find a Store</li>
                  <li>Genius Bar</li>
                  <li>Today at Apple</li>
                  <li>Group Reservations</li>
                  <li>Apple Camp</li>
                  <li>Apple Trade In</li>
                  <li>Ways to Buy</li>
                  <li>Recycling Programme</li>
                  <li>Order Status</li>
                  <li>Shopping Help</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>For Business</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>Apple and Business</li>
                  <li>Shop for Business</li>
                </ul>
                <h6 className="font-weight-bold mt-4">For Education</h6>
                <ul className="list-unstyled">
                  <li>Apple and Education</li>
                  <li>Shop for Education</li>
                  <li>Shop for University</li>
                </ul>
                <h6 className="font-weight-bold mt-4">For Healthcare</h6>
                <ul className="list-unstyled">
                  <li>Apple in Healthcare</li>
                  <li>Mac in Healthcare</li>
                  <li>Health on Apple Watch</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Apple Values</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>Accessibility</li>
                  <li>Education</li>
                  <li>Environment</li>
                  <li>Privacy</li>
                  <li>Supply Chain</li>
                </ul>
                <h6 className="font-weight-bold mt-4">About Apple</h6>
                <ul className="list-unstyled">
                  <li>Newsroom</li>
                  <li>Apple Leadership</li>
                  <li>Career Opportunities</li>
                  <li>Investors</li>
                  <li>Ethics & Compliance</li>
                  <li>Events</li>
                  <li>Contact Apple</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="text-center text-md-start d-none d-md-flex"> {/* Only visible on larger screens */}
        <Col xs={12} md={4} lg={2} className="mb-3">
          <h6 className="font-weight-bold">Shop and Learn</h6>
          <ul className="list-unstyled">
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>AirTag</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3">
          <h6 className="font-weight-bold">Apple Wallet</h6>
          <ul className="list-unstyled">
            <li>Wallet</li>
          </ul>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3">
          <h6 className="font-weight-bold">Account</h6>
          <ul className="list-unstyled">
            <li>Manage Your Apple ID</li>
            <li>Apple Store Account</li>
            <li>iCloud.com</li>
          </ul>
          <h6 className="font-weight-bold mt-4">Entertainment</h6>
          <ul className="list-unstyled">
            <li>Apple One</li>
            <li>Apple TV+</li>
            <li>Apple Music</li>
            <li>Apple Arcade</li>
            <li>Apple Podcasts</li>
            <li>Apple Books</li>
            <li>App Store</li>
          </ul>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3">
          <h6 className="font-weight-bold">Apple Store</h6>
          <ul className="list-unstyled">
            <li>Find a Store</li>
            <li>Genius Bar</li>
            <li>Today at Apple</li>
            <li>Group Reservations</li>
            <li>Apple Camp</li>
            <li>Apple Trade In</li>
            <li>Ways to Buy</li>
            <li>Recycling Programme</li>
            <li>Order Status</li>
            <li>Shopping Help</li>
          </ul>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3">
          <h6 className="font-weight-bold">For Business</h6>
          <ul className="list-unstyled">
            <li>Apple and Business</li>
            <li>Shop for Business</li>
          </ul>
          <h6 className="font-weight-bold mt-4">For Education</h6>
          <ul className="list-unstyled">
            <li>Apple and Education</li>
            <li>Shop for Education</li>
            <li>Shop for University</li>
          </ul>
          <h6 className="font-weight-bold mt-4">For Healthcare</h6>
          <ul className="list-unstyled">
            <li>Apple in Healthcare</li>
            <li>Mac in Healthcare</li>
            <li>Health on Apple Watch</li>
          </ul>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3">
          <h6 className="font-weight-bold">Apple Values</h6>
          <ul className="list-unstyled">
            <li>Accessibility</li>
            <li>Education</li>
            <li>Environment</li>
            <li>Privacy</li>
            <li>Supply Chain</li>
          </ul>
          <h6 className="font-weight-bold mt-4">About Apple</h6>
          <ul className="list-unstyled">
            <li>Newsroom</li>
            <li>Apple Leadership</li>
            <li>Career Opportunities</li>
            <li>Investors</li>
            <li>Ethics & Compliance</li>
            <li>Events</li>
            <li>Contact Apple</li>
          </ul>
        </Col>
      </Row>
      
      <Row className="text-center mt-3">
        <Col>
          <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 000800 040 1966.</p>
          <p className="mb-0">&copy; 2024 Apple Inc. All rights reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#">Terms of Use</a></li>
            <li className="list-inline-item"><a href="#">Sales Policy</a></li>
            <li className="list-inline-item"><a href="#">Legal</a></li>
            <li className="list-inline-item"><a href="#">Site Map</a></li>
            <li className="list-inline-item"><span>India</span></li>
          </ul>
        </Col>
      </Row>
    </Container>
    </footer>
  );
};

export default FooterComponent;
