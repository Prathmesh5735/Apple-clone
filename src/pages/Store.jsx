import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const responsive1 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile2: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  
const sliderImageUrl2 = [
  { url: "specialist-slider2.png" },
  { url: "uni-slider2.png" },
  { url: "watchandlearn-slider2.png" },
  { url: "personal-slider2.png" }
];

const slider4url = [
  {url:'ipencil-slider4.png'},
  {url:'15proG-slider4.png'},
  {url:'keyboard-slider4.png'},
  {url:'wallet-slider4.png'},
  {url:'watchbeltG-slider4.png'},
  {url:'15proB-slider4.png'},
  {url:'watchbeltY-slider4.png'},
  {url:'ring-slider4.png'},
  {url:'accessories-slider4.png'}
]

const products = [
  {
    name: "Mac",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666",
  },
  {
    name: "iPhone",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1692971740071",
  },
  {
    name: "iPad",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875",
  },
  {
    name: "Apple Watch",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=1693703814407",
  },
  {
    name: "AirPods",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885",
  },
  {
    name: "AirTag",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
  },
  {
    name: "Apple TV 4K",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
  },
  {
    name: "HomePod",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
  },
  {
    name: "Accessories",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202403?wid=400&hei=260&fmt=png-alpha&.v=1707850611597",
  },
];

const tradeInValues = [
  { device: "iPhone 14 Pro Max", value: "Up to ₹61045.00" },
  { device: "iPhone 14 Pro", value: "Up to ₹57970.00" },
  { device: "iPhone 14 Plus", value: "Up to ₹38000.00" },
  { device: "iPhone 14", value: "Up to ₹35980.00" },
  { device: "iPhone SE (3rd generation)", value: "Up to ₹18000.00" },
  { device: "iPhone 13 Pro Max", value: "Up to ₹47970.00" },
  { device: "iPhone 13 Pro", value: "Up to ₹46000.00" },
  { device: "iPhone 13", value: "Up to ₹33000.00" },
  { device: "iPhone 13 mini", value: "Up to ₹30000.00" },
  { device: "iPhone 12 Pro Max", value: "Up to ₹36000.00" },
  { device: "iPhone 12 Pro", value: "Up to ₹34000.00" },
  { device: "iPhone 12", value: "Up to ₹24000.00" },
  { device: "iPhone 12 mini", value: "Up to ₹19000.00" },
  { device: "iPhone SE (2nd generation)", value: "Up to ₹11000.00" },
  { device: "iPhone 11 Pro Max", value: "Up to ₹26000.00" },
  { device: "iPhone 11 Pro", value: "Up to ₹24000.00" },
  { device: "iPhone 11", value: "Up to ₹18000.00" },
  { device: "iPhone XS Max", value: "Up to ₹17000.00" },
  { device: "iPhone XS", value: "Up to ₹16000.00" },
  { device: "iPhone XR", value: "Up to ₹13000.00" },
  { device: "iPhone X", value: "Up to ₹13000.00" },
  { device: "iPhone 8 Plus", value: "Up to ₹11050.00" },
  { device: "iPhone 8", value: "Up to ₹10000.00" },
  { device: "iPhone 7 Plus", value: "Up to ₹9000.00" },
  { device: "iPhone 7", value: "Up to ₹7000.00" },
  { device: "iPhone 6s Plus", value: "Up to ₹7000.00" },
  { device: "iPhone 6s", value: "Up to ₹6000.00" }
];

const Store = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [data,setdata] = useState([]);
  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  
  const handleClose = () => setShowModal(false);
  // ##### FETCH DATA ##### //

  const fetchdata = ()=>{
    axios.get("  http://localhost:3000/Storedata")
    .then((res)=>{
      console.log(res.data.slider1)
      setdata(res.data.slider1)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>(
    fetchdata()
  ),[])

  return (
    <>
      <div className="buynow pt-2">
        <Container>
          <p className="text-center">
            Get iPhone 15 Pro from ₹5408.00/mo. for 24 months with No Cost EMI
            from most leading banks.§{" "}
            <Link to="/buy" style={{ textDecoration: "none" }}>Buy Now</Link>
          </p>
        </Container>
      </div>

      <div className="bg-light">
        <div className="sub-head bg-light pt-3 ps-5 pe-5">
          <Container className="my-5 d-lg-block d-md-none d-sm-none d-xs-none">
            <Row className="align-items-center justify-content-between">
              <Col xs={6} sm={6} md={6} lg={6}>
                <h1 className="font-weight-bold">
                  Store.
                  <span className="lead fs-1 fw-bold">
                    The best way to buy <br /> the products you love.
                  </span>
                </h1>
              </Col>
              <Col xs={12} md={6} lg={2} className="mb-3">
                <i className="fa-solid fa-user fs-4 pe-2 ms-5 ps-3"></i>
                <p className="d-block">
                  <span>
                    Need shopping help? <br />
                    <span className="text-primary">Ask a Specialist</span>
                  </span>
                </p>
                <Link to="/store-locator" className="d-block text-decoration-none">
                  <span className="text-dark">
                    Visit an Apple Store <br /><strong className="text-primary">Find one near you</strong>
                  </span>
                </Link>
              </Col>
            </Row>

            <Row className="justify-content-evenly text-center pt-5">
              {products.map((product) => (
                <Col
                  xs={6}
                  sm={4}
                  md={3}
                  lg={1}
                  key={product.name}
                  className="mb-4"
                >
                  <Link className="text-decoration-none" to={`/${product.name.toLowerCase().replace(" ", "")}`}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="img-fluid"
                    />
                    <p className="mt-2">{product.name}</p>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* <div className="slider1 bg-light">
          <Container>
            <Row>
              <Col>
                <h2 style={{ color: "gray" }}>
                  The Latest. <span style={{ color: 'black' }}>Take A look at what's new right now</span>
                </h2>
              </Col>
            </Row>
          </Container>
          <Carousel
            responsive={responsive1}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            infinite={true}
            partialVisible={false}
          >
            {sliderImageUrl1.map((imageUrl, index) => (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="apple" />
              </div>
            ))}
          </Carousel>
        </div> */}

        <div className="slider2">
          <Container>
            <Row>
              <Col>
                <h2 style={{ color: 'grey' }}>
                  Accessories.<span style={{ color: 'black' }}> Essentials that pair perfectly with your favourite devices.</span>
                </h2>
              </Col>
            </Row>
          </Container>
          <Carousel
            responsive={responsive1}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            infinite={true}
            partialVisible={false}
          >
            {sliderImageUrl2.map((imageUrl, index) => (
              <div className="slider" key={index}>
                <Link
                  to="#"
                  onClick={() => handleShow(
                    <div>
                      <p>More details about the image.</p>
                      <img src={imageUrl.url} alt="apple" style={{ width: '100%' }} />
                    </div>
                  )}
                >
                  <img src={imageUrl.url} alt="apple" />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="slider3">
          <Container>
            <Row>
              <Col>
                <h2 style={{ color: 'black' }}>
                The Apple Store difference. <span style={{ color: 'grey' }}>Whenever and however you need</span>
                </h2>
              </Col>
            </Row>
          </Container>
          <Carousel
            responsive={responsive1}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            infinite={true}
            partialVisible={false}
          >
            <div className="slider">
              <Link className="text-decoration-none" onClick={() => handleShow(
                <div>
                  <p>Your device Estimated trade-in value*</p>
                  <ul>
                    {tradeInValues.map((item, index) => (
                      <li key={index}>
                        {item.device}: {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}>
                <Card>
                  <Card.Title className="text-start p-4 fs-3">
                    <span className="text-primary">Exchange your <br /> smartphone,</span> get <br /> ₹16000.00 – <br /> ₹61045.00 in credit <br /> towards a new one.*
                  </Card.Title>
                </Card>
              </Link>
            </div>

            <div className="slider">
              <Link className="text-decoration-none" onClick={() => handleShow("Customize your Mac.")}>
                <Card>
                  <Card.Title className="text-start p-5 fs-3">
                    <i className="fa-brands fa-apple linear pb-2"></i>
                    <h1 className="linear">Customize your Mac.</h1>
                  </Card.Title>
                </Card>
              </Link>
            </div>

            <div className="slider">
              <Link className="text-decoration-none" onClick={() => handleShow("Flexible Ways to pay. Plus No Cost EMI.§")}>
                <Card>
                  <Card.Title className="text-start p-4 fs-3">
                    <i style={{color:'lime'}} className="fa-regular fa-credit-card pb-3"></i><br />
                    <span style={{color:'lime'}}>Flexible Ways to pay.</span> 
                    <br />Plus No Cost EMI.§
                  </Card.Title>
                </Card>
              </Link>
            </div>

            <div className="slider">
              <Link className="text-decoration-none" onClick={() => handleShow("Make them yours. Engrave a mix of emoji, names and numbers for free.")}>
                <Card>
                  <Card.Title className="text-start p-3 fs-3">
                    <i style={{color:"purple"}} className="fa-solid fa-face-grin-wink pb-3"></i> <br />
                    <span style={{color:"purple"}}>Make them yours.</span> <br />
                    Engrave a mix of emoji,<br /> names and numbers for <br /> free.
                  </Card.Title>
                </Card>
              </Link>
            </div>

            <div className="slider">
              <Link className="text-decoration-none" onClick={() => handleShow("Enjoy free delivery, or easy pickup from an Apple Store.")}>
                <Card>
                  <Card.Title className="text-start p-3 fs-3">
                  <i style={{color:'lime'}} className="fa-solid fa-truck pt-3 "></i><br />
                    <span style={{color:"lime"}}>Enjoy free delivery, or easy pickup </span> from an Apple Store.
                  </Card.Title>
                </Card> 
              </Link>
            </div>
          </Carousel>
        </div>

        <div className="slider4">
          <Container>
            <Row>
              <Col>
                <h2 style={{ color: 'black' }}>
                Accessories. <span style={{ color: 'grey' }}>Essentials that pair perfectly with your favourite devices.</span>
                </h2>
              </Col>
            </Row>
          </Container>
          <Carousel
            responsive={responsive1}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            infinite={true}
            partialVisible={false}
          >
              {slider4url.map((el,ind)=>(
                <div className="slider" key={ind}>
                  <Card>
                  <img className="p-5" src={el.url} alt="" height={350} width={300} />
                  <p className="ps-5" style={{color:'red',}}>NEW</p>
                  </Card>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Store;
