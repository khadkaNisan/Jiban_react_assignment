import React from "react";
import "../AboutUs.css"; // Save your CSS here

const statsData = [
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Destinations" },
  { number: "5000+", label: "Happy Travelers" },
];

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
            alt="Travel Company"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            At <strong>GlobeTrek Travels</strong>, we believe traveling is not
            just about reaching a destination – it’s about creating
            unforgettable experiences. With over{" "}
            <strong>10 years of expertise</strong> in the tourism industry,
            we’ve helped thousands of travelers discover the world with comfort,
            safety, and joy.
          </p>
          <p className="about-text">
            Our mission is to bring you closer to new cultures, breathtaking
            landscapes, and unique adventures. Whether you’re looking for a
            relaxing getaway, a family holiday, or an adventure trip – we design
            packages tailored just for you.
          </p>

          <div className="about-stats">
            {statsData.map((stat, index) => (
              <div className="stat-box" key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="../page/aboutUs.html" className="about-btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
