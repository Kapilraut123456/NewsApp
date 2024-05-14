import React from 'react'
import './NewsItem.css'
const NewsItem = ({
  source,
  imageUrl,
  title,
  description,
  date,
  author,
  newsUrl,
}) => {
  return (
    <div className="container">
      <div className="card rounded-3 text-white border-0">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/11/Untitled-design-2-5.png?fit=1600%2C900&ssl=1"
          }
          className="card-img-top rounded-top-3"
          alt="..."
          height="170px"
        />

        <div className="card-body dark rounded-bottom-3">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="card-text">
            <div className="small mb-3">
              By {author ? author : "Kapil Raut"} on {" "}
              {new Date(date).toGMTString()}
            </div>
          </div>
          <div className="btns">
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="read-btn"
            >
              Read More
            </a>
            <span className="source">{source}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem

