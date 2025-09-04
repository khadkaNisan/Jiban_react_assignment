import React from "react";

const destinationsData = [
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.7JWaswnDzLfA4Cvv4vj_AwHaEu?w=870&h=555&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "saipal base camp",
    title: "Saipal Base Camp",
    description:
      "Experience the breathtaking beauty of the Saipal region, with its stunning landscapes and rich cultural heritage.",
    price: "From $899",
    link: "#",
  },
  {
    img: "https://th.bing.com/th/id/R.882cf045c7dc97d780ff1f4be72062f7?rik=CBUeyNIy2zQ3AQ&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2011%2f04%2f12%2f8295441%2fIDmg0027.JPG&ehk=P8ekk%2bjwyAo4h8q0xzBDiKk3lGXnySBTyIxXREmT6a8%3d&risl=&pid=ImgRaw&r=0",
    alt: "Swiss Alps",
    title: "Trishuli Rafting",
    description:
      "Experience the thrill of white-water rafting in the Trishuli River.",
    price: "From $1,499",
    link: "../page/Trishuli_Rafting.html",
  },
  {
    img: "https://vl-prod-static.b-cdn.net/system/images/000/564/997/b0ec349b52e4d21afefa7e184e62195a/x300gt/20211002_124341_1_.jpg?1647189023",
    alt: "Santorini, Greece",
    title: "Badamilika",
    description:
      "Experience the unique culture and stunning landscapes of Badamilika.",
    price: "From $1,199",
    link: "#",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="featured-destinations" id="featured-destinations">
      <div className="section-title">
        <h2>Featured Destinations</h2>
      </div>
      <div className="destinations">
        {destinationsData.map((dest, index) => (
          <div key={index} className="destination-card">
            <div className="card-img">
              <img src={dest.img} alt={dest.alt} />
            </div>
            <div className="card-content">
              <h3>{dest.title}</h3>
              <p>{dest.description}</p>
              <span className="price">{dest.price}</span>
              <a href={dest.link} className="btn">
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
