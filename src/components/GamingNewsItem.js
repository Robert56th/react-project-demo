import React from "react";

const GamingNewsItem = ({ title, url, urlToImage }) => {
  return (
    <div>
      <h3>
        <p>
          <a href={url} rel="noreferrer" target="_blank">
            {title}
          </a>
        </p>
      </h3>
    </div>
  );
};

export default GamingNewsItem;
