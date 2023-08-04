import React, { useState } from 'react';
import './sliderimage.css'; // Create this CSS file in the same folder as Slider.js
import img1 from '../../../assets/images/pic1.jpg';
import img2 from '../../../assets/images/pic2.jpg';
import img3 from '../../../assets/images/pic3.jpg';
import img4 from '../../../assets/images/pic4.jpg';
import img5 from '../../../assets/images/pic5.jpg';
import img6 from '../../../assets/images/pic6.jpg';
import img10 from '../../../assets/images/pic10.jpg';

const images = [img1,img2,img3,img4,img5,img6,img10];

const SliderImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container relative">
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          <button
            className="arrow-button left-arrow absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            &#8592;
          </button>
          <img src={image} alt={`Slide ${index}`} className="mx-auto h-full max-w-full" />
          <button
            className="arrow-button right-arrow absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      ))}
    </div>
  );
};

export default SliderImage;