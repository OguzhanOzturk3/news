

import React from 'react';
import axios from 'axios'
import { useState, useEffect, useRef } from 'react';
const Profile = () => {
  const [news, SetNews] = useState([]);
  // count news
  const [news_count, SetNews_count] = useState(0);
  const [checked_cat, SetChecked_cat] = useState(['business']);
  const response_data2 =useRef([])
  



  const fetchNews = async () => {
    
   
    

   // const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${checked_cat[0]}&apiKey=1595f6d9b1a24d1ba4b2de6e9c9bc07b`);

    await axios.all(checked_cat.map((checked) => axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${checked}&apiKey=fec3069e798949948daf33b7d13c482f`))).then(
      axios.spread((...checked_data1) => {
     
       
        response_data2.current=checked_data1
     
       


      }))


    //https://newsapi.org/v2/everything?q=apple&apiKey=e7b633c208f74c0f941cd8db41fbfd52
    //https://newsapi.org/v2/top-headlines?country=tr&category=${cat}&apiKey=e7b633c208f74c0f941cd8db41fbfd52

    //find number of object
    response_data2.current.map((datas)=>(
     
        
        response_data2.current[0]==datas ? console.log("same") : response_data2.current[0].data.articles= response_data2.current[0].data.articles.concat(datas.data.articles)
      
    ))


    
 
    const count = Object.keys(response_data2.current[0].data.articles).length;
    SetNews_count(count);

    

    //get first 20 article

    const news_splited = response_data2.current[0].data.articles.splice(0, 20)
    SetNews(news_splited);

 

    

  }
  //first load
  useEffect(() => {
    fetchNews();

  }, [checked_cat])


 







  //check checkbox clicked and true
  const checkboxOnclick = (e) => {

    if (e.target.checked) {
      SetChecked_cat([...checked_cat, e.target.value])

    }
    else if (!e.target.checked) {

      const temp = checked_cat;
      const index = checked_cat.indexOf(e.target.value)
      const removed_cat = temp.splice(index, 1);
      SetChecked_cat([...temp]);
    }



  }


  // button per page
  const page_button = () => {

    const buttons = [];

    for (let i = 0; i < Math.ceil(news_count / 20); i++) {

      buttons.push(<button value={i}>{i + 1}</button>);
    }
    return (buttons);
  }



  return (
    <div className='categories'>
      <div className='category-selector'>


        <h1 className='category-title'>Categories</h1>



        <label>business
          <input type="checkbox" defaultChecked value="business" onChange={checkboxOnclick} className='check-box'/>
        </label>

        <label>entertainment
          <input type="checkbox" value="entertainment" onChange={checkboxOnclick} className='check-box'/>
        </label>

        <label>general
          <input type="checkbox" value="general" onChange={checkboxOnclick} className='check-box'/>
        </label>
        <label>health
          <input type="checkbox" value="health" onChange={checkboxOnclick} className='check-box'/>
        </label>
        <label>science
          <input type="checkbox" value="science" onChange={checkboxOnclick} className='check-box'/>
        </label>
        <label>sports
          <input type="checkbox" value="sports" onChange={checkboxOnclick} className='check-box'/>
        </label>
        <label>technology
          <input type="checkbox" value="technology" onChange={checkboxOnclick} className='check-box'/>
        </label>




      </div>

      <div className='categories-content'>




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
        <div className='page-number-info'>
          <div>
            <h3>Total Result:{news_count}, News Per Page:20, Number of pages:{Math.ceil(news_count / 20)};</h3>
          </div>
          <div className='page-button'>{page_button()}</div>

        </div>
      </div>


    </div>
  )
}
export default Profile;