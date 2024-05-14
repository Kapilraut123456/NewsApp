import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import "./News.css";
const News = ({ category, loading, setLoading,apiKey,setProgress }) => {
  const [article, setArticle] = useState([]);
  let [page,setPage] = useState(1)
  document.title = `${category ? category : "News App"}`;

  useEffect(() => {
    setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${page}`;
    setProgress(30)
    setLoading(true);
    fetch(url)
      .then((res) => res.json(),setProgress(70))
      .then(({ articles }) => {
        setArticle(articles), setLoading(false),setProgress(100)
      });
      {
        article.length === 0 && setPage((page = 1));
      }
  }, [category,page]);
  

  const FetchMoreData = () => {
    if(article.length === 0){
      setPage(page = 1)
    }
    else{
    setPage(page + 1);
  };
  
  }
  const FetchPrviousData  = () =>{
    setPage(page-1)
  }
 
  return (
    <>
     {article.length === 0 ? " " : <h3 className="title">
        Top Headlines On {category ? category : "General"}
      </h3>}
      {!loading && article.length === 0 && <h1 className="msg">No more news</h1>}
      <div className="container">
        {article.map((item, index) => (
          <div key={index} className="main">
            {!loading && (
              <NewsItem
                source={item.source.name}
                imageUrl={item.urlToImage}
                title={item.title}
                description={item.description}
                date={item.publishedAt}
                author={item.author}
                newsUrl={item.url}
              />
            )}
          </div>
        ))}
      </div>
      {!loading && (
        <div className="fetch-data-btn">
          {page >= 2 && <button onClick={FetchPrviousData}>Back</button>}
          <button onClick={FetchMoreData}>
            {article.length === 0 ? "Go to the First Page" : "More"}
          </button>
        </div>
      )}
    </>
  );
};

export default News;
