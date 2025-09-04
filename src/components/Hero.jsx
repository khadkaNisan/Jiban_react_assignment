import React, { useState, useEffect, useRef } from "react";

const slidesData = [
  "https://cdn.wallpapersafari.com/12/77/M651Bi.jpeg",
  "https://th.bing.com/th/id/R.4a1f13308294eef83026456bee45cbc8?rik=7kH62xQW0YHTMQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f1%2fe%2f1200208-4k-ultra-hd-nature-wallpaper-3840x2160-4k.jpg&ehk=2eUewHmpLRBIU2mm5kX4BAQJ4EdRapxBaVIfuiqYqE0%3d&risl=1&pid=ImgRaw&r=0F",
  "https://images.pexels.com/photos/709496/pexels-photo-709496.jpeg?cs=srgb&dl=pexels-ph-m-tung-223235-709496.jpg&fm=jpg",
  "https://www.pixel4k.com/wp-content/uploads/2018/10/best-nature-4k_1540131754.jpg",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const slideInterval = 3000;

  // Show next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  // Start auto sliding
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, slideInterval);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Pause on hover
  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, slideInterval);
  };

  // Jump to slide when indicator clicked
  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentSlide(index);
    intervalRef.current = setInterval(nextSlide, slideInterval);
  };

  return (
    <section
      className="hero"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-slides">
        {slidesData.map((url, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${url})` }}
          >
            <div className="slide-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h2>Discover the Beauty of the World</h2>
      </div>

      <div className="slide-indicators">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
