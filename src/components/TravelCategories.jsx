import React from "react";
import "../TravelCategories.css";

const TravelCategories = () => {
  return (
    <section className="featured-destinations">
      <div className="section-title">
        <h2>Explore Our Categories</h2>
      </div>
      <div className="destinations">
        {/* Kori Dada */}
        <div className="destination-card">
          <div className="card-img">
            <img
              src="https://thumbs.dreamstime.com/b/amazing-view-lamaria-church-mountain-village-ushguli-near-snowy-shkhara-peak-greater-caucasus-range-georgia-svaneti-242545594.jpg"
              alt="Kori Dada kaski"
            />
            <div className="category-label">Kori Dada kaski</div>
          </div>
          <div className="card-content">
            <h3>Kori Dada kaski</h3>
            <p>
              Kori Dada offers breathtaking views of the Himalayas, lush green
              landscapes, and a serene environment perfect for relaxation and
              adventure.
            </p>
            <span className="price">From $899</span>
            <div className="button-group">
              <a href="../page/Kori_Dada_kaski.html" className="btn explore">
                <i className="fas fa-binoculars"></i> Explore
              </a>
              <a href="#" className="btn love">
                <i className="fas fa-heart"></i> Love
              </a>
            </div>
          </div>
        </div>

        {/* ABC Trek */}
        <div className="destination-card">
          <div className="card-img">
            <img
              src="https://c1.wallpaperflare.com/preview/63/509/240/annapurna-base-camp-photos-himalayas.jpg"
              alt="ABC track"
            />
            <div className="category-label">ABC Trek</div>
          </div>
          <div className="card-content">
            <h3>ABC Trek</h3>
            <p>
              Explore the stunning Annapurna region with the ABC Trek. Walk
              through green forests and charming villages while enjoying amazing
              mountain views.
            </p>
            <span className="price">From $1,199</span>
            <div className="button-group">
              <a href="../page/ABC_Trek.html" className="btn explore">
                <i className="fas fa-binoculars"></i> Explore
              </a>
              <a href="#" className="btn love">
                <i className="fas fa-heart"></i> Love
              </a>
            </div>
          </div>
        </div>

        {/* Pokhara */}
        <div className="destination-card">
          <div className="card-img">
            <img
              src="https://cdn.wallpapersafari.com/10/44/s6EQRq.jpg"
              alt="pokhara valley"
            />
            <div className="category-label">Pokhara</div>
          </div>
          <div className="card-content">
            <h3>Pokhara</h3>
            <p>
              Explore the beautiful Pokhara Valley, surrounded by mountains and
              lakes. A perfect spot for nature lovers and adventure seekers.
            </p>
            <span className="price">From $1,499</span>
            <div className="button-group">
              <a href="#" className="btn explore">
                <i className="fas fa-binoculars"></i> Explore
              </a>
              <a href="#" className="btn love">
                <i className="fas fa-heart"></i> Love
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
