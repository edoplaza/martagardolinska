import React, { useContext, useEffect, useState } from 'react';
import gsap from 'gsap';
import { MainContext } from '../contexts/MainContext';
import Review from './Review';

let tl = gsap.timeline();

const Press = () => {
  const [size, setSize] = useState(0);
  const { press, getPress, pressTotal, closeMenu } = useContext(MainContext);

  useEffect(() => {
    getPress(5);
    setSize(5);
    closeMenu();
    tl.to('.press-list', {
      duration: 1,
      css: {
        opacity: 1,
        y: 0
      }}
    )
  }, [])

  const getMore = () => {
    getPress(size + 1);
    setSize(size + 1);
  }

  return (
    <div className="page press">
      <div className="page-header container">
        <h1 className="title">Press</h1>
      </div>
      <div className="press-content">
        <div className="press-list container">
        {
          press.map(review => {
            const {
              article_title_press,
              source_press,
              image_press,
              source_small_press,
              article_date_press,
              article_text_press,
              article_author_press,
              article_pdf_press,
              article_url_press
            } = review.acf

            return <Review
              key={article_title_press}
              source = {source_press}
              image = {image_press}
              small = {source_small_press}
              title = {article_title_press}
              date = {article_date_press}
              text = {article_text_press}
              author = {article_author_press}
              pdf = {article_pdf_press}
              url = {article_url_press}
            />
          })
        }
        </div>
        { pressTotal.length > press.length && (
          <div className="more container">
            <button onClick={getMore}>Load More</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Press;
