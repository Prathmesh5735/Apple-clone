import React from 'react';
import { Image } from 'react-bootstrap';

const ExampleCarouselImage = ({ text, src }) => {
  return (
    <div className="d-flex align-items-center justify-content-center bg-secondary text-white" style={{ height: '100%' }}>
      <Image src={src} alt={text} fluid style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
      <h3 className="position-absolute">{text}</h3>
    </div>
  );
};

export default ExampleCarouselImage;
