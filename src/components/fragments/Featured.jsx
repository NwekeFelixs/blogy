import React from 'react';
import '../css/style.css'
import featuredImg1 from '../img/featured-1.jpg'
import featuredImg2 from '../img/featured-2.jpg'
import featuredImg3 from '../img/featured-3.jpg'
import featuredImg4 from '../img/featured-4.jpg'
import featuredImg5 from '../img/featured-5.jpg'
import featuredImg6 from '../img/featured-6.jpg'

import authorImg1 from '../img/author-1.jpg'
import authorImg2 from '../img/author-2.jpg'
import authorImg3 from '../img/author-3.jpg'
import authorImg4 from '../img/author-4.jpg'
import authorImg5 from '../img/author-5.jpg'
import authorImg6 from '../img/author-6.jpg'

const FeaturedSection = () => {
  const featuredItems = [
    {
      imageSrc: featuredImg1,
      authorImages: [authorImg1, authorImg2],
      tags: ['Design', 'Idea', 'Review'],
      title: 'New technology is not good or evil in and of itself',
      content:
        'Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue. Integer egestas ut tellus sed pretium. Nullam tristique augue ut mattis vulputate. Duis et lorem in odio ultricies porttitor.',
    },
    {
      imageSrc: featuredImg2,
      authorImages: [authorImg3],
      tags: ['Creative', 'Product'],
      title: 'It’s a new era in design, there are no rules',
      content:
        'Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta differentia est in principiis naturalibus, tanta sit in finibus bonorum malorumque dissimilitudo.',
    },
    {
      imageSrc: featuredImg3,
      authorImages: [authorImg4],
      tags: ['Design', 'Creative', 'Idea'],
      title: 'Perfection has to do with the end product',
      content:
        'Aenean eget urna aliquet, viverra orci quis, aliquam erat. Ut rutrum quam quam, eu eleifend est blandit et. Vivamus suscipit ultrices venenatis. Aliquam massa ipsum, porta quis hendrerit at, varius sed leo. Curabitur convallis urna sit amet mi tempus posuere.',
    },
    {
      imageSrc: featuredImg4,
      authorImages: [authorImg5, authorImg2],
      tags: ['People', 'Story'],
      title: 'Everyone has a different life story',
      content:
        'Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium. Nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.',
    },
    {
      imageSrc: authorImg5,
      authorImages: [authorImg6],
      tags: ['Design', 'Lifestyle', 'Idea'],
      title: 'The difference is quality',
      content:
        'Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Atque his de rebus et splendida est eorum et illustris oratio.',
    },
    {
      imageSrc: featuredImg6,
      authorImages: [authorImg3, authorImg1],
      tags: ['Idea', 'Creating'],
      title: 'Problems are not stop signs, they are guidelines',
      content: 'Quid ad utilitatem tantae pecuniae. Duo enim genera quae erant, fecit tria. Et quod est munus, quod opus sapientiae.',
    },
  ];

  return (
    <section className="section featured" aria-label="featured post">
      <div className="container">
        <p className="section-subtitle">
          Get started with our <strong className="strong">best stories</strong>
        </p>
        <ul className="has-scrollbar">
          {featuredItems.map((item, index) => (
            <li key={index} className="scrollbar-item">
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ '--width': 500, '--height': 600 }}>
                  <img
                    src={item.imageSrc}
                    width="500"
                    height="600"
                    loading="lazy"
                    alt={item.title}
                    className="img-cover"
                  />
                  <ul className="avatar-list absolute">
                    {item.authorImages.map((authorImage, authorIndex) => (
                      <li key={authorIndex} className="avatar-item">
                        <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
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
                  <ul className="card-meta-list">
                    {item.tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>
                        <a href="#" className="card-tag">
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h3 className="h4">
                    <a href="#" className="card-title hover:underline">
                      {item.title}
                    </a>
                  </h3>
                  <p className="card-text">{item.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedSection;
