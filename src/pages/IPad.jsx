import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaCirclePlus, FaCreditCard } from "react-icons/fa6";
import { FaLaptopHouse } from "react-icons/fa";
import { RiArrowDropRightLine, RiComputerFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { Accordion } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FooterComponent from '../components/FooterComponent'
const IPad = () => {
  return (
    <div className='ipad-comp'>
      <div className='d-flex align-items-center justify-content-between container mt-5 p-5'>
        <h1>iPad</h1>
        <h4>Touch, draw and type <br />on one magical device.</h4>
      </div>
      <div className="video" style={{ height: '834px', border: "2px solid red" }}>

      </div>

      {/* section 1 */}
      <section className="section1 mt-5 container">
        <h1>Get to know iPad.</h1>
        <div className='ipad-slider mt-5'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_productivity__d55aee5so6ky_large.jpg" alt="" className='h-100 w-100' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_creativity__gcfv7x90x42u_large.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_learning__es1tt702bf6u_large.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_entertainment__dcynvyyoe7iq_large.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/in/ipad/home/images/overview/consider/fc_pencil__coz76i7lwsuq_large.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/in/ipad/home/images/overview/consider/fc_ipados__urrua12bwaqy_large.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* section 2 */}
      <section className="section-2 container mt-5 pt-5">
        <div className='d-flex align-items-center justify-content-between'>
          <h1>Explore the line-up.</h1>
          <p className='text-primary'>Compare all models <RiArrowDropRightLine /></p>
        </div>
        <div className='sec2-img mt-5'>
          <ul className='list-unstyled d-flex justify-content-between text-center align-items-center'>
            <li>
              <div className="sec2-li-img">
                <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_large.png" alt="" className='h-100 w-100' />
              </div>
              <div className="img-content pt-3">
                <h4>iPad Pro</h4>
                <p>The ultimate iPad experience with the most <br /> advanced technology.</p>
                <span><b>From $99900.00*</b></span>
                <div className='img-content-btns pt-3'>
                  <button className='btn btn-primary'>Learn more</button><button className='btn text-primary'>Buy <RiArrowDropRightLine /></button>
                </div><hr />
                <div className='pt-3'>
                  <h5>33.02 cm or 28.22 cm </h5>
                  <span>(13″ or 11″) Ultra Retina XDR display <sup>3</sup> <br /> ProMotion technology <br /> P3 wide colour <br /> Nano-texture display glass option <br />on 1TB and 2TB models</span> <br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/icon_chip_m4__b2ujor0cthv6_large.png" alt="" className='d-inline-block mt-4' /><br />
                  <span className='mb-4 d-inline-block text-secondary'>M4 Chip</span><br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/ipadpro13_gen7_camera__dgh2hv5gfrqu_large.png" alt="" /><br />
                  <span className='text-secondary'>12MP Wide Camera <br />4k video,ProRes</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/ipad_front_camera_landscape__dl3oc157n50m_large.png' className='d-inline-block mt-4' /><br />
                  <span className='text-secondary mb-4 d-inline-block'>Landscape 12MP Ultra Wide front camera</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/applepencil_vertical_gen4_gen3__d7b45g01744m_large.png' /><br />
                  <span className='text-secondary mb-4 d-inline-block'>Supports Apple Pencil Pro</span><br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/magickeyboard_ipad__h1dmesqz8cq6_large.png" alt="" /><br />
                  <span className="text-secondary d-inline-block">Supports Magic Keyboard for iPad Pro (M4)</span>
                </div>
              </div>
            </li>
            <li>
              <div className="sec2-li-img">
                <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_large.png" alt="" className='h-100 w-100' />
              </div>
              <div className="img-content pt-3">
                <h4>iPad Air</h4>
                <p>Serious performance in a thin and <br /> light design.</p>
                <span><b>From $59900.00*</b></span>
                <div className='img-content-btns d-flex pt-3 align-items-center justify-content-center'>
                  <button className='btn btn-primary'>Learn more</button><button className='btn text-primary'>Buy <RiArrowDropRightLine /></button>
                </div><hr />
                <div className='pt-3'>
                  <h5>32.78 cm or 27.59 cm</h5>
                  <span>(13″ or 11″) Ultra Retina XDR display <sup>3</sup> <br /> ProMotion technology <br /> P3 wide colour <br /> Nano-texture display glass option <br />on 1TB and 2TB models</span> <br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/icon_chip_m4__b2ujor0cthv6_large.png" alt="" className='d-inline-block mt-4' /><br />
                  <span className='d-inline-block mb-4 text-secondary'>M4 Chip</span><br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/ipadpro13_gen7_camera__dgh2hv5gfrqu_large.png" alt="" /><br />
                  <span className='text-secondary'>12MP Wide Camera <br />4k video,ProRes</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/ipad_front_camera_landscape__dl3oc157n50m_large.png' className='d-inline-block mt-4' /><br />
                  <span className='text-secondary mb-4 d-inline-block'>Landscape 12MP Ultra Wide front camera</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/applepencil_vertical_gen4_gen3__d7b45g01744m_large.png' /><br />
                  <span className='text-secondary mb-4 d-inline-block'>Supports Apple Pencil (USB‑C)</span><br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/magickeyboard_ipad__h1dmesqz8cq6_large.png" alt="" /><br />
                  <span className="text-secondary d-inline-block">Supports Magic Keyboard for iPad Pro (M4)</span>
                </div>
              </div>
            </li>
            <li>
              <div className="sec2-li-img">
                <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_large.png" alt="" className='h-100 w-100' />
              </div>
              <div className='img-content pt-3'>
                <h4>iPad</h4>
                <p>The colourful, all‑screen iPad for the things <br /> you do every day.</p>
                <span><b>From $34900.00*</b></span>
                <div className='img-content-btns d-flex pt-3 align-items-center justify-content-center'>
                  <button className='btn btn-primary'>Learn more</button><button className='btn text-primary'>Buy <RiArrowDropRightLine /></button>
                </div><hr />
                <div className='pt-3'>
                  <h5>27.69 cm</h5>
                  <span>(13″ or 11″) Ultra Retina XDR display <sup>3</sup> <br /> ProMotion technology <br /> P3 wide colour <br /> Nano-texture display glass option <br />on 1TB and 2TB models</span> <br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/icon_chip_m4__b2ujor0cthv6_large.png" alt="" className='d-inline-block mt-4' /><br />
                  <span className='d-inline-block mb-4 text-secondary'>M4 Chip</span> <br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/ipadpro13_gen7_camera__dgh2hv5gfrqu_large.png" alt="" /><br />
                  <span className='text-secondary'>12MP Wide Camera <br />4k video,ProRes</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/ipad_front_camera_landscape__dl3oc157n50m_large.png' className='d-inline-block mt-4' /><br />
                  <span className='text-secondary mb-4 d-inline-block'>Landscape 12MP Ultra Wide front camera</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/applepencil_vertical_gen4_gen3__d7b45g01744m_large.png' /><br />
                  <span className='text-secondary mb-4 d-inline-block'>Supports Apple Pencil (USB‑C)</span><br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/magickeyboard_ipad__h1dmesqz8cq6_large.png" alt="" /><br />
                  <span className="text-secondary d-inline-block">Supports Magic Keyboard for iPad Pro (M4)</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* section 3 */}
      <section className="section-3 mt-5 container pt-5">
        <h1>iPad essentials</h1>
        <div className='sec3-img d-flex justify-content-between mt-5'>
          <div>
            <div className='text-center'>
              <span className='text-danger'>New</span>
              <h4>Apple Pencil</h4>
              <p>Dream it up.Jot it down</p>
              <button className='btn text-primary'>Learn more <RiArrowDropRightLine /></button>
            </div>
            <img src="https://www.apple.com/in/ipad/home/images/overview/essentials/bc_pencil__b1ze600aojyq_xlarge.png" alt="" width={549} height={396} />
          </div>
          <div>
            <img src="https://www.apple.com/in/ipad/home/images/overview/essentials/bc_keyboard__b2j4vh67cw76_xlarge.png" alt="" width={549} height={396} />
            <div className='text-center'>
              <span className='text-danger'>New</span>
              <h4>Keyboards for iPad</h4>
              <p>Type it out. Take it with you</p>
              <button className='text-primary btn'>Learn more <RiArrowDropRightLine /></button>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="section-4 mt-5 pt-5 container">
        <div className='d-flex justify-content-between align-items-center'>
          <h1>Why Apple is the best <br />place to buy iPad.</h1>
          <p className='text-primary'>Show iPad <RiArrowDropRightLine /></p>
        </div>
        <div className='mt-5'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <button className="btn position-relative h-100 w-100">
                <FaCreditCard className="fs-1" /><br />
                <h4>Monthly payment options available.</h4>
                <h6 className="pt-3">Choose the easy way to finance with convenient monthly payment options.</h6>
                <FaCirclePlus className="add-icon text-dark" />
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn h-100 w-100">
                <RiComputerFill className="fs-1" />
                <h4>Save with <br /> Apple Trade In.</h4>
                <h6 className="pt-3">Get credit towards your next Mac when you trade in. an eligible device at an Apple Store. <sup>4</sup></h6>
                <FaCirclePlus className="add-icon text-dark" />
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn h-100 w-100">
                <FaLaptopHouse className='fs-1' />
                <h4>Customise Your Mac.</h4>
                <h6 className="pt-3">Choose Your Chip, Memory, <br /> Storage, Even Colour</h6>
                <FaCirclePlus className="add-icon text-dark" />
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn h-100 w-100">
                <TbTruckDelivery className="fs-1" />
                <h4>Get flexible delivery <br /> and easy pickup.</h4>
                <h6 className="pt-3">Get free delivery or pickup at your <br /> Apple Store.</h6>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn h-100 w-100">
                <HiUsers className="fs-1" />
                <h4>Get to Know Your <br /> new Mac.</h4>
                <h6 className="pt-3">Learn how to get the most out of <br /> your new Mac with a free one-on- <br /> one Personal Session.</h6>
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* section 5 */}
      <section className="section-5 mt-5 pt-5 container mb-5">
        <h1>Signigicant Others.</h1>
        <div className='mt-5'>
          <div className='sec5-img h-100 w-100'>
            {/* <Accordion defaultActiveKey={'0'} className='h-100'>
              <Accordion.Item eventKey='home' className='h-50'>
                <Accordion.Header>iPad And iPhone</Accordion.Header>
                <Accordion.Body>
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='profile' className='h-50'>
                <Accordion.Header>iPad And Mac</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion> */}
            <Tabs defaultActiveKey={'profile'} id='uncontrolled-tab-example' className=' d-flex justify-content-center text-center'>
              <Tab eventKey={'home'} title='home' className='sec5-img'>
                <div className='mb-3 mt-3'>
                  iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hGNmmrFTtQISTacJx5I29gMyknq8pp7LoQ&s" alt="" height={300} width={500}/>
              </Tab>
              <Tab eventKey={'profile'} title='profile' className='sec5-img'>
                <div className='mb-3 mt-3'>
                  iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar. Then use your iPad for drawing or editing with Apple Pencil or as a second display. Extend your workflow to new places, and when you return to your desk, Universal Control allows you to use one mouse or trackpad seamlessly across both devices.
                </div>
                <img src="https://www.apple.com/newsroom/images/live-action/wwdc-2019/apple_design-awards_pixelmator_06042019_carousel.jpg.large.jpg" alt="" />
              </Tab>
            </Tabs>
          </div>
          {/* <div className='sec5-img d-flex'>
            <Tabs defaultActiveKey={'profile'} id='uncontrolled-tab-example'>
              <Tab eventKey={'home'} title='home'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hGNmmrFTtQISTacJx5I29gMyknq8pp7LoQ&s" alt="" height={250} />
              </Tab>

              <Tab eventKey={'profile'} title='profile'>
                <img src="https://www.apple.com/newsroom/images/live-action/wwdc-2019/apple_design-awards_pixelmator_06042019_carousel.jpg.large.jpg" alt="" height={250} />
              </Tab>
            </Tabs>
          </div> */}
        </div>
      </section>
      <FooterComponent/>
    </div>
  )
}

export default IPad