
import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
const Profile = (props) => {
  const [news, SetNews] = useState([]);
  const { cat } = props;
  // count news
  const [news_count, SetNews_count] = useState(0);

  const fetchNews = async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${cat}&apiKey=fec3069e798949948daf33b7d13c482f`);
    //https://newsapi.org/v2/everything?q=apple&apiKey=e7b633c208f74c0f941cd8db41fbfd52
    
    //find number of object
    const count = Object.keys(response.data.articles).length;
    SetNews_count(count);

//get first 20 article
    const news_splited = response.data.articles.splice(0, 20)
    SetNews(news_splited)

  }

  useEffect(() => {
    fetchNews();

  }, [cat])



  // button per page
  const page_button = () => {

    const buttons = [];

    for (let i = 0; i < Math.ceil(news_count / 20); i++) {

      buttons.push(<button value={i}>{i + 1}</button>);
    }
    return (buttons);
  }

  return (
    <div>
      <h1 className='page-title'> {cat} News</h1>



      <div className='home-content'>




        {news.map((news_item, idx) => (
          <div className='home-news' key={idx} >

            <div>
              <img src={news_item.urlToImage}></img>
              <p className='title'>{news_item.title}</p>
              <p className='news-content'>{news_item.content}</p>
            </div>

            <div>
              <p>{news_item.author}</p>
              <p>{news_item.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='page-number-info'>
        <div>
          <h3>Total Result:{news_count}, News Per Page:20, Number of pages:{Math.ceil(news_count / 20)};</h3>
        </div>
        <div className='page-button'>{page_button()}</div>

      </div>

    </div>
  )
}
export default Profile;