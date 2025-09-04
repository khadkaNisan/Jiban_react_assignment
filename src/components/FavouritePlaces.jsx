import React from "react";
import "../FavouritePlaces.css"; // Save your CSS here

const placesData = [
  { img: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg", label: "Lamjung", alt: "Italy", size: "tall" },
  { img: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg", label: "Purbi Rukum", alt: "Morocco", size: "wide" },
  { img: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg", label: "Chitwan", alt: "Uganda", size: "" },
  { img: "https://www.tmgadventure.com/wp-content/uploads/2019/08/tilicho-lake-nepal-trek-1024x442.jpg", label: "Tilicho Lake", alt: "Iceland", size: "wide" },
  { img: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg", label: "APi Track", alt: "Tanzania", size: "tall" },
  { img: "https://lp-cms-production.imgix.net/2020-12/shutterstockRF_618156158.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3", label: "Everest", alt: "Myanmar", size: "" },
  { img: "https://i1.wp.com/www.thegundruk.com/wp-content/uploads/2016/01/varieties-of-Tharu-delicacies.jpg", label: "Tharu Food", alt: "Myanmar", size: "" },
];

const FavouritePlaces = () => {
  return (
    <section className="favourite-places">
      <h2 className="title">OUR FEATURED TRAVEL DESTINATIONS</h2>
      <div className="places-grid">
        {placesData.map((place, index) => (
          <div key={index} className={`place-card ${place.size}`}>
            <img src={place.img} alt={place.alt} />
            <span className="label">{place.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavouritePlaces;
