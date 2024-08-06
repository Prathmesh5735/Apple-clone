import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCirclePlus, FaCreditCard} from "react-icons/fa6";
import { FaLaptopHouse} from "react-icons/fa";
import { RiArrowDropRightLine, RiComputerFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const Mac = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-around mt-5">
        <h1>Mac</h1>
        <p><b>If you can dream it,<br /> Mac can do it.</b></p>
      </div>
      <div className="video" style={{ height: '834px', border: "2px solid red" }}>
        <video className="welcome-video-video" muted="" playsInline="" data-inline-media="" loop="" preload="none" role="img" aria-label="A video showcasing the lineup of Mac products: Showcases the MacBook Air, MacBook Air 13, MacBook Pro, iMac, Mac mini, Mac Studio, and Studio Display." src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/large_2x.mp4#t=4.097679"></video>
      </div>

      {/*section 1*/}
      <section className="section-1 mt-5 p-5">
        <h1 className="pb-5">Go further with Mac.</h1>
        <div className="sec1-img">
          <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e2e6381b-c16a-4041-8837-21e9fab300bb.__CR0,0,2928,1250_PT0_SX1464_V1___.png" alt="" />
          <div className="img-content text-center">
            <h1 className="text-white">Supercharge your studies</h1>
            <div className="img-btns d-flex align-items-center justify-content-around pt-3">
              <button className="bg-white btn">Watch the film</button><button className="bg-primary btn text-white">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="section-2 mt-5 container">
        <h1 className="pb-5">Get to know Mac.</h1>
        {/* swiper here */}
        <div className="sec2-img d-flex align-items-center">
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
              <img src="https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_ease__bvgkz2zdltxy_large.jpg" alt="" />
              <FaCirclePlus className="add-icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_performance__dh5hyac1zf8m_large.jpg" alt="" />
              <FaCirclePlus className="add-icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/in/mac/home/images/overview/consider/mac_iphone__gh1tblkt6bqm_large.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/in/mac/home/images/overview/consider/mac_compatibility__cu59oukz81ci_large.jpg" alt="" />
              <FaCirclePlus className="add-icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_security__gfwda10khdym_large.jpg" alt="" />
              <FaCirclePlus className="add-icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_durability__epiwcuk7zkeq_large.jpg" alt="" />
              <FaCirclePlus className="add-icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_values__c9gck9qi4kia_large.jpg" alt="" />
              <FaCirclePlus className="add-icon" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* section 3 */}
      <section className="section-3 container mt-5 pt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Explore the line-up.</h1>
          <p className="text-primary">Compare all models <RiArrowDropRightLine /></p>
        </div>
        <div className="sec3-img">
          <div></div>
          <div className="sec3-pr-info d-flex justify-content-between mt-4 text-center">
            <div className="sec3-pr-info-img">
              <div>
                <img src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png" alt="" className="h-100 w-100" />
              </div>
              <div className="sec3-pr-info-content">
                <p className="pt-3"><b>MacBook Air 13" and 15"</b></p>
                <span>M2 or M3 Chip</span>
                <p className="pt-2">Strikingly thin and fast so you can <br /> work, play or create anywhere.</p>
                <span><b>From $99900.00*</b></span>
                <ul className="list-unstyled d-flex mt-4 align-items-center justify-content-around mb-4">
                  <li><button className="btn bg-primary text-white rounded-pill">Learn more</button></li>
                  <li><button className="btn text-primary">Buy <RiArrowDropRightLine /></button></li>
                </ul>
              </div><hr />
              <div>
                <h4>34.46 cm or 38.91 cm</h4>
                <span className="text-secondary">(13.6″ or 15.3″) Liquid Retina display with <br /> 500 nits of brightness and support for <br /> 1 billion colours <sup>5</sup></span><br />
                <img src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large.png" alt="" className="d-inline-block pt-4" /><br />
                <span className="text-secondary">Apple M2 or M3 chip</span>
                <ul className="list-unstyled">
                  <li><span className="d-inline-block mt-3 text-secondary">Up to</span></li>
                  <li><h4>18 hours</h4></li>
                  <li><span className="text-secondary">battery life <sup>6</sup></span></li>
                </ul>
                <ul className="list-unstyled">
                  <li><h4>4 Ports</h4></li>
                  <li className="text-secondary">2x Thunderbolt / USB 4, <br /> headphone jack, MagSafe</li>
                </ul>
                <ul className="list-unstyled">
                  <li><h4>1.24 kg or 1.51 kg <br />(2.7 lb. or 3.3 lb.)</h4></li>
                  <li className="text-secondary">Weight</li>
                </ul>
              </div>
            </div>
            <div className="sec3-pr-info-img">
              <div>
                <img src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png" alt="" className="h-100 w-100" />
              </div>
              <div className="sec3-pr-info-content">
                <p className="pt-3"><b>MacBook Air 14" and 16"</b></p>
                <span>M3, M3 Pro or M3 Max Chip</span>
                <p className="pt-2">The most advanced Mac laptops <br /> for demanding workflows.</p>
                <span><b>From $169900.00*</b></span>
                <ul className="list-unstyled d-flex align-items-center justify-content-around mt-4 mb-4">
                  <li><button className="btn bg-primary text-white rounded-pill">Learn more</button></li>
                  <li><button className="btn text-primary">Buy <RiArrowDropRightLine /></button></li>
                </ul>
              </div><hr />
              <div>
                <h4>35.97 cm or 41.05 cm</h4>
                <span className="text-secondary">(14.2″ or 16.2″) Liquid Retina XDR display <br /> with 1,000 nits of <br /> HDR and 600 nits of SDR brightness, and <br />
                  up to 120Hz refresh rates <sup>5</sup></span><br />
                <img src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_icon_m3_pro_max__wg8d2vblzmqi_large.png" alt="" /><br />
                <span className="text-secondary">Apple M3, M3 Pro or M3 Max Chip</span>
                <ul className="list-unstyled">
                  <li><span className="d-inline-block mt-3 text-secondary">Up to</span></li>
                  <li><h4>22 hours</h4></li>
                  <li><span className="text-secondary">battery life <sup>6</sup></span></li>
                </ul>
                <ul className="list-unstyled">
                  <li><h4>7 Ports</h4></li>
                  <li className="text-secondary">2x Thunderbolt / USB 4, <br /> headphone jack, MagSafe</li>
                </ul>
                <ul className="list-unstyled">
                  <li><h4>1.55 kg or 2.14 kg <br /> (3.41 lb. or 4.71 lb.)</h4></li>
                  <li className="text-secondary">Weight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="section-4 mt-5 container">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Why Apple is the best <br />place to buy Mac.</h1>
          <span className="text-primary">Shop Mac <RiArrowDropRightLine /></span>
        </div>

        {/* swiper section 4 */}
        <div className="sec4-swipers mt-5 text-left">
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
                <FaLaptopHouse className='fs-1'/>
                <h4>Customise Your Mac.</h4>
                <h6 className="pt-3">Choose Your Chip, Memory, <br /> Storage, Even Colour</h6>
                <FaCirclePlus className="add-icon text-dark" />
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn h-100 w-100">
                <TbTruckDelivery className="fs-1"/>
                <h4>Get flexible delivery <br /> and easy pickup.</h4>
                <h6 className="pt-3">Get free delivery or pickup at your <br /> Apple Store.</h6>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn h-100 w-100">
                <HiUsers className="fs-1"/>
                <h4>Get to Know Your <br /> new Mac.</h4>
                <h6 className="pt-3">Learn how to get the most out of <br /> your new Mac with a free one-on- <br /> one Personal Session.</h6>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn h-100 w-100">
                <h4></h4>
                <h6 className="pt-3"></h6>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn h-100 w-100">
                <h4></h4>
                <h6 className="pt-3"></h6>
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Mac;
