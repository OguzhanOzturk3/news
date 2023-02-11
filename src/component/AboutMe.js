
import picture from '../image/picture.jpg'
import linkedin from '../image/linkedin.png'
import github from '../image/github.png'

import memory from '../image/memory.gif'
import restaurant from '../image/restaurant.gif'
import draw from '../image/draw.gif'
import shop_cart from '../image/shop-cart.gif'
import weather from '../image/weather.gif'
import responsive from '../image/responsive.gif'
import React from 'react';
const AboutMe = () => {



  return (
    <div>
      <h1 className='page-title'>About Me</h1>
      <div className='personal-info'>
        <div className='personal-picture'>
          <img src={picture}></img>
        </div>
        <div>
          <p>Merhaba ben Oğuzhan Öztürk. Karabük Üniversitesi Bilgisayar Mühendisliğinden yeni mezun oldum. Full stack ve yapay zeka üzerine 2 staj yaptım. Üniversitedeyken kendimi yapay zeka ve fornt-end alanlarında geliştirdim. Tez hocamın kurucusu olduğu ve okulumuzun Teknokentinde bulunan SimurgAI şirketi altında birçok proje yaptım. Ekibimle beraber yaptığım projelerin biri Tübitak tarafından burs aldı, bir diğeri ise Tübitak 2242’de final projelerine kaldı ve Giresun Teknofest’te projemi sunma imkanı buldum. Bu süreç içerisinde front-end alanının bana yapay zekadan daha çekici geldiğini farkettim ve kendimi front-end alanında geliştirmeye başladım. Front-End alanında birçok proje yaptım ve yapmaya devam ediyorum. Yeni şeyler öğrenmeye meraklı, kendini geliştirmek isteyen ve bu işi seven biriyim.</p>
        </div>
      </div>

      <h1 className='page-title'>My Projects</h1>

      <div className='home-content'>





        <div className='home-news portfolio-content'  >
          <div>
            <img src={responsive}></img>
            <p className='title'>Responsive Portfolio</p>
            <p className='news-content'>This website is responsive which changes its look according to users device resolution.</p>
          </div>
          <div className='projects-link'>
          <a href='https://github.com/OguzhanOzturk3/personal-portfolio/'> <img src={github}></img></a>
        </div>
        </div>

        <div className='home-news portfolio-content'  >
          <div>
            <img src={shop_cart}></img>
            <p className='title'>Shop Cart</p>
            <p className='news-content'>Shop Cart is a website which you can add items in cart, check total price and delete item from cart.</p>
          </div>
          <div className='projects-link'>
          <a href='https://github.com/OguzhanOzturk3/Shoping-Cart/'> <img src={github}></img></a>
        </div>
        </div>

        <div className='home-news portfolio-content'  >
          <div>
            <img src={weather}></img>
            <p className='title'>Weather App</p>
            <p className='news-content'>  In Weather App you can check any cities weather forecast with weather api and website background is going to change according to the weather of the city.</p>
          </div>
          <div className='projects-link'>
          <a href='https://github.com/OguzhanOzturk3/WeatherApp/'> <img src={github}></img></a>
        </div>
        </div>

        <div className='home-news portfolio-content'  >
          <div>
            <img src={memory}></img>
            <p className='title'>Memory Game</p>
            <p className='news-content'> You are trying to find images which you didn't click before. Every different image you click earns you 1 score.</p>
          </div>
          <div className='projects-link'>
          <a href='https://github.com/OguzhanOzturk3/Memory-Game/'> <img src={github}></img></a>
        </div>
        </div>

        <div className='home-news portfolio-content'  >
          <div>
            <img src={restaurant}></img>
            <p className='title'>Restaurant</p>
            <p className='news-content'> Restaurant website has 3 pages but when you change the page it will remove main content and bring the content according to page you clicked. </p>
          </div>
          <div className='projects-link'>
          <a href='https://github.com/OguzhanOzturk3/restaurant/'> <img src={github}></img></a>
        </div>
        </div>

        <div className='home-news portfolio-content'  >
          <div>
            <img src={draw}></img>
            <p className='title'>Etch-A-Sketch</p>
            <p className='news-content'>You can select gray, black or rgb colors and reset which cleans board. You can change how many pixels will be in drawing board.</p>
          </div>

          <div className='projects-link'>
          <a href='https://github.com/OguzhanOzturk3/Etch-A-Sketch/'> <img src={github}></img></a>
        </div>
        </div>

      

      </div>
      <div className='page-number-info'>


      </div>

    </div>
  )
}
export default AboutMe;