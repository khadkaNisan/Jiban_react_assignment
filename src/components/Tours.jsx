import React from "react";

const toursData = [
  {
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Shey Phoksundo National Park",
    title: "Shey Phoksundo National Park",
    description:
      "Experience the stunning landscapes and diverse wildlife of Shey Phoksundo National Park.",
    duration: "14 Days",
    location: "Darchula , Nepal",
    group: "Group Tour",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Pach Pokhari Trekking",
    title: "Pach Pokhari Trekking",
    description: "Embark on a thrilling trek to the stunning Pach Pokhari lakes.",
    duration: "10 Days",
    location: "Sindhupalchowk",
    group: "Small Group",
    link: "#",
  },
  {
    img: "https://www.discoverchinatours.com/upload/travel-guide/congjiang/basha-miao-village/album/basha1.jpg",
    alt: "Asian Cultural Tour",
    title: "Ghandruk Trek",
    description: "Discover the rich cultural heritage of the Ghandruk village.",
    duration: "6 Days",
    location: "Ghandruk, kaski",
    group: "Group Tour",
    link: "#",
  },
];

const Tours = () => {
  return (
    <section className="tours">
      <div className="section-title">
        <h2>Popular Tours</h2>
      </div>

      <div className="tour-cards">
        {toursData.map((tour, index) => (
          <div key={index} className="tour-card">
            <div className="tour-img">
              <img src={tour.img} alt={tour.alt} />
              <div className="tour-duration">{tour.duration}</div>
            </div>
            <div className="tour-content">
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <div className="tour-info">
                <span>
                  <i className="fas fa-map-marker-alt"></i> {tour.location}
                </span>
                <span>
                  <i className="fas fa-user-friends"></i> {tour.group}
                </span>
              </div>
              <a href={tour.link} className="btn">
                View Tour
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
