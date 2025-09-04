import React from "react";
import "../PopularPosts.css"; // Make sure to save your CSS in this file

const postsData = [
  {
    img: "https://wallpapercave.com/dwp2x/wp13216934.jpg",
    alt: "Mountain Lake",
    category: "Nature",
    title: "Exploring Beautiful Mountain Lakes",
    description:
      "Discover the most stunning mountain lakes around the world and learn about their unique ecosystems...",
    authorImg: "https://wallpapercave.com/wp/wp13216981.jpg",
    authorName: "Sital Shrestha",
    date: "May 15, 2025",
  },
  {
    img: "https://images.theconversation.com/files/80059/original/image-20150501-12614-wyxe7r.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    alt: "Urban Architecture",
    category: "Architecture",
    title: "Kathmandu: The City of Temples",
    description:
      "Explore the rich cultural heritage and stunning architecture of Kathmandu, a city that beautifully blends tradition and modernity.",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
    authorName: "Sital Pandey",
    date: "April 28, 2025",
  },
  {
    img: "https://th.bing.com/th/id/R.7d2a680791b56617363319ecbd1c6a11?rik=ygmtnEtGM7cIWQ&pid=ImgRaw&r=0",
    alt: "Culinary Arts",
    category: "Food",
    title: "Newari Food Culture",
    description:
      'Learn about the unique flavors and traditional dishes of the Newari community in Nepal, including the famous "Samay Baji" and "Yomari"...',
    authorImg: "https://randomuser.me/api/portraits/men/22.jpg",
    authorName: "Sarmila Thapa",
    date: "June 3, 2025",
  },
];

const PopularPosts = () => {
  return (
    <section className="popular-posts">
      <div className="container">
        <div className="section-titleLine">
          <span>Popular Posts</span>
        </div>
        <div className="posts-grid">
          {postsData.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-image">
                <img src={post.img} alt={post.alt} />
                <div className="post-category">{post.category}</div>
              </div>
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="post-meta">
                  <div className="post-author">
                    <img src={post.authorImg} alt="Author" />
                    <span>{post.authorName}</span>
                  </div>
                  <div className="post-date">
                    <i className="far fa-clock"></i>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPosts;
