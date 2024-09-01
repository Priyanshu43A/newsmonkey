// NewsItem.js
import React from "react";
import "./NewsItem.css"; // Import the CSS file for styling

class NewsItem extends React.Component {
  render() {
    const { image, title, description, link, source, publishedAt, author } =
      this.props;

    function formatDateTime(isoString) {
      // Create a new Date object from the ISO string
      const date = new Date(isoString);

      // Extract the date parts
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
      const year = date.getFullYear();

      // Extract the time parts
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      // Format the date and time
      const formattedDate = `${day}-${month}-${year}`;
      const formattedTime = `${hours}:${minutes}`;

      return `${formattedDate} | ${formattedTime}`;
    }

    return (
      <div className="news-item">
        <h3 className="news-source">
          <span className="font-bold">Source:</span>{" "}
          {!source ? "unavailable" : source}
        </h3>
        <img
          src={
            !image
              ? "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"
              : image
          }
          alt={title}
          className="news-image"
        />
        <h2 className="news-title">{title}</h2>
        <p className="news-description">
          {!description
            ? "Unfortunately! Description is unavailable..Please go to full article to readd news!"
            : description}
        </p>
        <p className="publish">
          {" "}
          <span className="font-bold">Publishe At:</span>{" "}
          {formatDateTime(publishedAt)}
        </p>
        <p className="publish">
          <span className="font-bold">Author:</span>{" "}
          {!author ? "unavailable" : author}
        </p>
        <a
          href={link}
          className="news-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Article
        </a>
      </div>
    );
  }
}

export default NewsItem;
