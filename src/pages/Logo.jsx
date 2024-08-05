import React from "react";
import { Button, Carousel, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExampleCarouselImage from "../components/ExampleCarouselImage";
import FooterComponent from "../components/FooterComponent";

const Logo = () => {
  return (
    <>
      <div className="Hero-div">
        <Container className="h-100">
          <Row className="justify-content-center text-center h-100 Hero-container">
            <Col className="align-self-end ">
              <h1
                style={{ fontSize: "52px", fontFamily: "sans-serif" }}
                className="text-light mb-1 Hero-title"
              >
                iPad Pro
              </h1>
              <h3
                style={{ fontFamily: "sans-serif" }}
                className="text-light mb-3"
              >
                Unbelievably thin. Incredibly powerful.
              </h3>
              <div className="Hero-btn mb-4 ">
                <Button variant="primary rounded-pill ">Learn more</Button>
                <Button className="rounded-pill ms-4" variant="outline-primary">
                  Buy Now
                </Button>
              </div>
              <div className="Hero-image-container">
                <img src="ipad.png" alt="iPad Pro" className="Hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="buy-mac mt-2 bg-light p-4">
        <Container className="h-100">
          <div className="justify-content-center  text-center h-100">
            <div className="Hero-image-contain">
              <img
                src="buy mac store.png"
                alt="MacBook"
                className="Hero-image"
              />
            </div>
            <div className="Hero-btn">
              <Button
                className="rounded-pill fw-semibold fs-5 pe-3 ps-3"
                variant="outline-primary"
              >
                Shop
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div className="iphone15">
        <Container
          style={{ backgroundColor: "black" }}
          fluid
          className="text-center text-white py-5"
        >
          <Row>
            <Col sm={12} className="mt-5">
              <h1>iPhone 15 Pro</h1>
              <h3 className="mb-3">Titanium. So strong. So light. So Pro.</h3>
              <Button
                variant="primary"
                className="mx-2 rounded-pill fs-5 ps-3 pe-3 mt-3"
              >
                Learn more
              </Button>
              <Button
                variant="outline-primary"
                className="mx-2 rounded-pill ps-4 pe-4 fs-5 pb-1 pt-1 mt-3"
              >
                Buy
              </Button>
            </Col>
          </Row>
          <Row  className="mt-4">
            <Col sm={12} style={{ height: "auto", width: "100%" }}>
              <img
                src="iphone 15 pro.png"
                alt="iPhone 15 Pro"
                className="img-fluid"
                height={300}
                width={450}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="items-details mt-5">
      <Container fluid>
      <div className="mt-5">
        <Row className="m-3">
          <Col md={6} className="p-0" style={{ background: "linear-gradient(178deg, rgba(147,205,219,1) 18%, rgba(0,0,0,0) 100%)" }}>
            <div className="text-center mt-5 mb-5">
              <h1>iPad Air</h1>
              <h5 className="mb-3">Two sizes. Faster chip. Does it all.</h5>
              <Button href="#" className="fs-5 d-inline rounded-pill" variant="dark" style={{ padding: "5px 15px" }}>Learn more</Button>
              <Button href="#" className="fs-5 ms-3 d-inline rounded-pill" variant="outline-dark" style={{ padding: "3px 15px" }}>Buy</Button>
            </div>
            <img src="https://www.apple.com/v/ipad-air/w/images/overview/hero/hero_endframe__fvm22b45e5me_large.png" alt="" className="col-5 m-auto d-block" />
          </Col>
          <Col md={6} className="p-0" style={{ backgroundColor: "#FAFAFA" }}>
            <div className="text-center mt-5 mb-5">
              <h1>MacBook Pro</h1>
              <h5 className="mb-3">Mind-blowing. Head-turning.</h5>
              <Button href="#" className="fs-5 d-inline rounded-pill" variant="primary" style={{ padding: "5px 15px" }}>Learn more</Button>
              <Button href="#" className="fs-5 ms-3 d-inline rounded-pill" variant="outline-primary" style={{ padding: "3px 15px" }}>Buy</Button>
            </div>
            <img src="https://www.apple.com/v/macbook-pro/ak/images/overview/closer-look/3d_viewer_pf_14_16__cnmzk9b7xtpy_large.jpg" alt="" className="col-12" />
          </Col>
        </Row>
      </div>

      <div className="ms-3">
        <Row style={{ width: "100%" }}>
          <Col md={6}>
            <div className="pb-3" style={{ backgroundColor: "black" }}>
              <div className="text-center pt-5 mb-5">
                <h1 className="text-white">iPad Pro</h1>
                <h5 className="mb-3 text-white">Unbelievably thin. Incredibly powerful.</h5>
                <Button href="#" className="fs-5 d-inline rounded-pill" variant="primary" style={{ padding: "5px 15px" }}>Learn more</Button>
                <Button href="#" className="fs-5 ms-3 d-inline rounded-pill" variant="outline-primary" style={{ padding: "3px 15px" }}>Buy</Button>
              </div>
              <img src="https://www.apple.com/v/ipad-pro/aq/images/overview/contrast/product-tile/ipad_pro__ea93uc0cnvsm_large.jpg" alt="" className="col-5 m-auto d-block pb-1" />
            </div>
          </Col>
          <Col md={6}>
            <div className="pb-3" style={{ backgroundColor: "black" }}>
              <div className="text-center pt-5 mb-5">
                <h1 className="text-white">iPhone 15 Pro</h1>
                <h5 className="mb-3 text-white">Titanium. So strong. So light. So Pro.</h5>
                <Button href="#" className="fs-5 d-inline rounded-pill" variant="primary" style={{ padding: "5px 15px" }}>Learn more</Button>
                <Button href="#" className="fs-5 ms-3 d-inline rounded-pill" variant="outline-primary" style={{ padding: "3px 15px" }}>Buy</Button>
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3K2tC8dVB0hrqqGiS75r2X08Bj6ExP8gt0mU4UgU9rv-Trkol" alt="" className="col-6 d-block m-auto" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="ms-3">
        <Row style={{ width: "100%" }}>
          <Col md={6}>
            <div className="pb-3">
              <div className="text-center pt-5 mb-5 pb-5">
                <h1 className="text-dark">iPhone 15</h1>
                <h5 className="mb-3 text-dark">New camera. New design. Newphoria.</h5>
                <Button href="#" className="fs-5 d-inline rounded-pill" variant="primary" style={{ padding: "5px 15px" }}>Learn more</Button>
                <Button href="#" className="fs-5 ms-3 d-inline rounded-pill" variant="outline-primary" style={{ padding: "3px 15px" }}>Buy</Button>
              </div>
              <img src="https://www.apple.com/v/iphone-15/c/images/overview/welcome/hero_endframe__e0ajd2ayxqc2_large.jpg" alt="" className="col-12 m-auto d-block pt-5" />
            </div>
          </Col>
          <Col md={6}>
            <div className="pb-3">
              <div className="text-center pt-5 mb-5">
                <h1 className="text-dark">Apple Trade In</h1>
                <h5 className="mb-3 text-dark">Upgrade and save. It’s that easy.</h5>
                <Button href="#" className="fs-5 d-inline rounded-pill" variant="primary" style={{ padding: "5px 15px" }}>Learn more</Button>
                <Button href="#" className="fs-5 ms-3 d-inline rounded-pill" variant="outline-primary" style={{ padding: "3px 15px" }}>Buy</Button>
              </div>
              <img src="https://9to5mac.com/wp-content/uploads/sites/6/2023/09/iPhone-trade-in.jpg?quality=82&strip=all" alt="" className="col-12 d-block m-auto" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
      </div>

      {/* SLIDER PART */}
      <div className="slider-logo pt-5 pb-5">
      <Carousel>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/nHV1YavWeg_rV-NyMqFbhQ/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/p-dFQhrrenz0eg8_smgu9w/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/SCG2BRdS-gXePqsduWlMmQ/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/dGQnmrXQqSe_YJJV1kcudQ/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/XRVC0LFY33UhYRJc3uusMA/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/TFK62rQMTTWVNoPgxjIkPQ/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <ExampleCarouselImage src="https://is1-ssl.mzstatic.com/image/thumb/diPfyBx0ejxYmfa0XE34cw/689x387.jpg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>

      <FooterComponent/>
    </>
  );
};

export default Logo;
