import React from 'react';
import '../css/style.css'
import authorImg1 from '../img/author-1.jpg'
import authorImg2 from '../img/author-2.jpg'
import authorImg3 from '../img/author-3.jpg'
import authorImg4 from '../img/author-4.jpg'
import authorImg5 from '../img/author-5.jpg'
import authorImg6 from '../img/author-6.jpg'

import recentImg1 from '../img/recent-1.jpg'
import recentImg2 from '../img/recent-2.jpg'
import recentImg3 from '../img/recent-3.jpg'
import recentImg4 from '../img/recent-4.jpg'
import recentImg5 from '../img/recent-5.jpg'
import recentImg6 from '../img/recent-6.jpg'

const recentPosts = [
  {
    title: "Creating is a privilege but it’s also a gift",
    imgSrc: recentImg1,
    authorAvatar: authorImg3,
    tags: ["Lifestyle", "People", "Review"],
    content: "Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a, sollicitudin nec risus."
  },
  {
    title: "Being unique is better than being perfect",
    imgSrc: recentImg2,
    authorAvatar: authorImg5,
    tags: ["Design", "Product", "Idea"],
    content: "Nam in pretium dui. Phasellus dapibus, mi at molestie cursus, neque eros aliquet nisi, non efficitur nisi est nec mi. Nullam semper, ligula a luctus ornare, leo turpis fermentum lectus, quis volutpat urna orci a lectus. Duis et odio lobortis, auctor justo ut, egestas magna."
  },
  {
    title: "Now we’re getting somewhere",
    imgSrc: recentImg3,
    authorAvatar: authorImg2,
    tags: ["Idea", "Product", "Review"],
    content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat rhoncus quam, a feugiat elit gravida eget. Curabitur id pharetra ligula. Integer porttitor suscipit ante ac faucibus. Sed a enim non enim viverra pulvinar vel diam ut lorem congue feugiat."
  },
  {
    title: "The trick to getting more done is to have the freedom to roam around",
    imgSrc: recentImg4,
    authorAvatar: authorImg3,
    tags: ["Lifestyle", "Design"],
    content: "Integer nec mi cursus, blandit est et, auctor mauris. Aenean ex metus, faucibus in mattis at, tincidunt eu dolor. Cras hendrerit massa nec augue placerat rutrum. Sed facilisis massa enim, ac tempus diam elementum sit amet."
  },
  {
    title: "Every day, in every city and town across the country",
    imgSrc: recentImg5,
    authorAvatar: authorImg1,
    tags: ["People", "Story", "Lifestyle"],
    content: "Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac tellus mollis, sit amet sodales metus elementum. Aliquam eu mi massa. Proin suscipit enim a pulvinar viverra."
  },
  {
    title: "Your voice, your mind, your story, your vision",
    imgSrc: recentImg6,
    authorAvatar: authorImg6,
    tags: ["People", "Review", "Story"],
    content: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et, maximus metus."
  },
];

const RecentPostsSection = () => {
  return (
    <section className="section recent" aria-label="recent post">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">
            See what we’ve <strong className="strong">written lately</strong>
          </h2>
          <div className="top-author">
            <ul className="avatar-list">
              <li className="avatar-item">
                <a href="#" className="avatar large img-holder" style={{ '--width': 100, '--height': 100 }}>
                  <img src={authorImg1} width="100" height="100" alt="top author" className="img-cover" />
                </a>
              </li>
              <li className="avatar-item">
                <a href="#" className="avatar large img-holder" style={{ '--width': 100, '--height': 100 }}>
                  <img src={authorImg2} width="100" height="100" alt="top author" className="img-cover" />
                </a>
              </li>
              <li className="avatar-item">
                <a href="#" className="avatar large img-holder" style={{ '--width': 100, '--height': 100 }}>
                  <img src={authorImg3} width="100" height="100" alt="top author" className="img-cover" />
                </a>
              </li>
              <li className="avatar-item">
                <a href="#" className="avatar large img-holder" style={{ '--width': 100, '--height': 100 }}>
                  <img src={authorImg4} width="100" height="100" alt="top author" className="img-cover" />
                </a>
              </li>
              <li className="avatar-item">
                <a href="#" className="avatar large img-holder" style={{ '--width': 100, '--height': 100 }}>
                  <img src={authorImg5} width="100" height="100" alt="top author" className="img-cover" />
                </a>
              </li>
            </ul>
            <span className="span">Meet our top authors</span>
          </div>
        </div>
        <ul className="grid-list">
          {recentPosts.map((post, index) => (
            <li key={index}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ '--width': 550, '--height': 660 }}>
                  <img src={post.imgSrc} width="550" height="660" loading="lazy" alt={post.title} className="img-cover" />
                  <ul className="avatar-list absolute">
                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style={{ '--width': 100, '--height': 100 }}>
                        <img src={post.authorAvatar} width="100" height="100" loading="lazy" alt="Author" className="img-cover" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    {post.tags.map((tag, index) => (
                      <li key={index}>
                        <a href="#" className="card-tag">{tag}</a>
                      </li>
                    ))}
                  </ul>
                  <h3 className="h4">
                    <a href="#" className="card-title hover:underline">
                      {post.title}
                    </a>
                  </h3>
                  <p className="card-text">
                    {post.content}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn">Load more</button>
      </div>
    </section>
  );
}

export default RecentPostsSection;
