import React from 'react';
import '../css/style.css'
import authorImg1 from '../img/author-1.jpg'
import authorImg2 from '../img/author-2.jpg'
import authorImg3 from '../img/author-3.jpg'
import authorImg4 from '../img/author-4.jpg'
import authorImg5 from '../img/author-5.jpg'
import authorImg6 from '../img/author-6.jpg'

import recommendedImg1 from '../img/recommended-1.jpg'
import recommendedImg2 from '../img/recommended-2.jpg'
import recommendedImg3 from '../img/recommended-3.jpg'
import recommendedImg4 from '../img/recommended-4.jpg'
import recommendedImg5 from '../img/recommended-5.jpg'
import recommendedImg6 from '../img/recommended-6.jpg'


const recommendedPosts = [
  {
    imgSrc: recommendedImg1,
    authorImages: [
      authorImg5,
      authorImg2,
    ],
    title: 'The trick to getting more done is to have the freedom to roam around',
  },
  {
    imgSrc: recommendedImg2,
    authorImages: [authorImg3],
    title: 'Every day, in every city and town across the country',
  },
  {
    imgSrc: recommendedImg3,
    authorImages: [authorImg1],
    title: 'I work best when my space is filled with inspiration',
  },
  {
    imgSrc: recommendedImg4,
    authorImages: [
      authorImg4,
      authorImg3,
    ],
    title: 'I have my own definition of minimalism',
  },
  {
    imgSrc: recommendedImg5,
    authorImages: [authorImg6],
    title: 'Change your look and your attitude',
  },
  {
    imgSrc: recommendedImg6,
    authorImages: [authorImg3],
    title: 'The difference is quality',
  },
];

const RecommendedSection = () => {
  return (
    <section className="section recommended" aria-label="recommended post">
      <div className="container">
        <p className="section-subtitle">
          <strong className="strong">Recommended</strong>
        </p>

        <ul className="grid-list">
          {recommendedPosts.map((post, index) => (
            <li key={index}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ width: 300, height: 360 }}>
                  <img
                    src={post.imgSrc}
                    width="300"
                    height="360"
                    loading="lazy"
                    alt={post.title}
                    className="img-cover"
                  />

                  <ul className="avatar-list absolute">
                    {post.authorImages.map((authorImage, authorIndex) => (
                      <li key={authorIndex} className="avatar-item">
                        <a href="#" className="avatar img-holder" style={{ width: 100, height: 100 }}>
                          <img
                            src={authorImage}
                            width="100"
                            height="100"
                            loading="lazy"
                            alt="Author"
                            className="img-cover"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </figure>

                <div className="card-content">
                  <h3 className="h5">
                    <a href="#" className="card-title hover:underline">
                      {post.title}
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecommendedSection;
