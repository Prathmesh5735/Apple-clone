import React from "react";

const Mac = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-around mt-5">
        <h1>Mac</h1>
        <p><b>If you can dream it,<br /> Mac can do it.</b></p>
      </div>
      <div className="video" style={{height:'834px', border:"2px solid red"}}>
      <video className="welcome-video-video" muted="" playsInline="" data-inline-media="" loop="" preload="none" role="img" aria-label="A video showcasing the lineup of Mac products: Showcases the MacBook Air, MacBook Air 13, MacBook Pro, iMac, Mac mini, Mac Studio, and Studio Display." src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/large_2x.mp4#t=4.097679"></video>
      </div>
      <section className="section-1 mt-5 p-5">
        <h1 className="pb-5">Go further with Mac.</h1>
        <div className="sec1-img">
          <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e2e6381b-c16a-4041-8837-21e9fab300bb.__CR0,0,2928,1250_PT0_SX1464_V1___.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Mac;
