import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TravelCategories from "./components/TravelCategories";
import Testimonials from "./components/Testimonials";
import FeaturedDestinations from "./components/FeaturedDestinations";
import Chitwan from "./components/Citwan";
import Tours from "./components/Tours";
import PopularPosts from "./components/PopularPosts";
import ABC from "./components/ABC";
import FavouritePlaces from "./components/FavouritePlaces";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <section>
      <Header />
      <Hero />
      <TravelCategories />
      <Testimonials />
      <FeaturedDestinations />
      <Chitwan />
      <Tours />
      <PopularPosts />
      <ABC />
      <FavouritePlaces />
      <AboutUs />
      <ContactSection />
    </section>
  );
}
