import React, { useState, useEffect } from "react";
import axios from "axios";
import GamingNewsItem from "./GamingNewsItem";

const GamingNewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_642429d8dd8f1a50c643a37682fc5d4161aa&q=gaming&country=ca,ie,ph,gb,us&language=en`
      );
      console.log(response.data.results);
      setArticles(response.data.results);
    };

    getArticles();
  }, []);
  return (
    <div>
      {articles.slice(0, 8).map((article) => {
        return <GamingNewsItem title={article.title} url={article.link} />;
      })}
    </div>
  );
};

export default GamingNewsList;
