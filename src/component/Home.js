





import { Link } from 'react-router-dom'
import React from 'react';
import axios from 'axios'

import { useState, useEffect } from 'react';

//image
import forward_image from '../image/forward.png'
import backward_image from '../image/backward.png'

function Home() {


  const [news, SetNews] = useState([]);
  const [slider, SetSLider] = useState([]);
  // count news
  const [news_count, SetNews_count] = useState(0);


  //slider item'larını çekme
  const slides = document.querySelectorAll('.slide');




  //fetch data
  const fetchNews = async () => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=fec3069e798949948daf33b7d13c482f');
    // find number of object
    const count = Object.keys(response.data.articles).length;
    SetNews_count(count);

    //slide ve content için bölme işlemi
    const slider_item = response.data.articles.splice(0, 3)
    SetSLider(slider_item);
    const news_splited = response.data.articles.splice(0, 17)
    SetNews(news_splited);

  }




  //slider button next
  const nextSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if (activeSlide.nextElementSibling) {
      activeSlide.nextElementSibling.classList.add('active')
    }
    else {
      slides[0].classList.add('active');
    }

  }

  //slider button prev
  const prevSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if (activeSlide.previousElementSibling) {
      activeSlide.previousElementSibling.classList.add('active')
    }
    else {
      slides[slides.length - 1].classList.add('active');
    }

  }


  useEffect(() => {

    fetchNews();



  }, [])

  useEffect(() => {
    if (slides.length > 0)
      slides[0].classList.add('active');
  }, [slides])

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

      <h1 className='page-title'>Home Page</h1>



      <div className='slider'>
        <div>


          {slider.map((slide_item) => (
            <div className='slide'>
              <img src={slide_item.urlToImage}></img>
              <p className='title'>{slide_item.title}</p>
              <p >{slide_item.content}</p>
            </div>


          ))}
        </div>

        <div >
          <button id='prev' className='slider-button-left' onClick={prevSlide}><img src={backward_image}></img></button>
          <button id='next' className='slider-button-right' onClick={nextSlide}><img src={forward_image}></img></button>

        </div>
      </div>


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
  );
}

export default Home;
