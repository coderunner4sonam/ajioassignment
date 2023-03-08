import React, { useState, useEffect } from 'react';
import imageone from "./imageone.avif"
import imagetwo from "./imagetwo.avif"
import imagethree from "./imagethree.avif"
import imagefour from "./imagefour.avif"

const images = [
    imageone,
    imagetwo,
    imagethree,
    imagefour,
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
  );
}

export default ImageSlider;