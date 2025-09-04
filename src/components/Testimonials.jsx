import React, { useState, useEffect, useRef } from "react";

const testimonialsData = [
  {
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Kabita Sharma",
    text: `"The European Adventure tour exceeded all my expectations. The guides were knowledgeable, and the itinerary was perfect. I'll definitely book with Wanderlust again!"`,
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rohit Sharma",
    text: `"My wildlife safari in Kenya was the trip of a lifetime. The organization was flawless, and we saw all the Big Five. Absolutely incredible experience."`,
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Grisma Khanal",
    text: `"I've traveled with many companies, but Wanderlust stands out for their attention to detail and customer service. The Asian Cultural Tour was fascinating."`,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const intervalTime = 5000; // 5 seconds

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, intervalTime);

    return () => clearInterval(intervalRef.current);
  }, []);

  const goToTestimonial = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, intervalTime);
  };

  return (
    <section className="testimonials">
      <div className="section-title">
        <h2>What Our Travelers Say</h2>
      </div>

      <div className="testimonial-cards">
        {testimonialsData.map((t, index) => (
          <div
            key={index}
            className={`testimonial ${index === currentIndex ? "active" : ""}`}
          >
            <img src={t.img} alt={t.name} />
            <p>{t.text}</p>
            <div className="name">{t.name}</div>
          </div>
        ))}
      </div>

      <div className="testimonial-nav">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`testimonial-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToTestimonial(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
