import React from "react";
import "../ABC.css"; // Save the CSS in this file

const ABC = () => {
  return (
    <section className="ABC">
      <div className="abc-image">
        <div className="abc-content">
          <h2>About Us</h2>
          <p>
            Mount Everest is the highest mountain in the world at 8,848 meters,
            located on the Nepal-Tibet border. First climbed in 1953 by Edmund
            Hillary and Tenzing Norgay, it is famous for its extreme height and
            challenging climbs.
          </p>
          <button>Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default ABC;
