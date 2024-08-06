import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { RiArrowDropRightLine } from "react-icons/ri";
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
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/ipad_front_camera_landscape__dl3oc157n50m_large.png' className='d-inline-block mt-4'/><br />
                  <span className='text-secondary mb-4 d-inline-block'>Landscape 12MP Ultra Wide front camera</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/applepencil_vertical_gen4_gen3__d7b45g01744m_large.png'/><br />
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
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/ipad_front_camera_landscape__dl3oc157n50m_large.png' className='d-inline-block mt-4'/><br />
                  <span className='text-secondary mb-4 d-inline-block'>Landscape 12MP Ultra Wide front camera</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/applepencil_vertical_gen4_gen3__d7b45g01744m_large.png'/><br />
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
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/ipad_front_camera_landscape__dl3oc157n50m_large.png' className='d-inline-block mt-4'/><br />
                  <span className='text-secondary mb-4 d-inline-block'>Landscape 12MP Ultra Wide front camera</span><br />
                  <img src='https://www.apple.com/v/ipad/home/ck/images/overview/select/applepencil_vertical_gen4_gen3__d7b45g01744m_large.png'/><br />
                  <span className='text-secondary mb-4 d-inline-block'>Supports Apple Pencil (USB‑C)</span><br />
                  <img src="https://www.apple.com/v/ipad/home/ck/images/overview/select/magickeyboard_ipad__h1dmesqz8cq6_large.png" alt="" /><br />
                  <span className="text-secondary d-inline-block">Supports Magic Keyboard for iPad Pro (M4)</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default IPad