import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const prevReviewHandler = (e) => {
    e.preventDefault();
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextReviewHandler = (e) => {
    e.preventDefault();
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomReviewHandler = (e) => {
    e.preventDefault();
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    console.log(randomIndex);
    setIndex(checkNumber(randomIndex));
  };

  return (
    <main>
      <section>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <div className='container'>
          <article className='review'>
            <div className='img-container'>
              <img src={image} alt={name} className='person-img' />
              <span className='quote-icon'>
                <FaQuoteRight />
              </span>
            </div>
            <h3 className='author'>{name}</h3>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='btn-container'>
              <button className='prev-btn' onClick={prevReviewHandler}>
                <FaChevronLeft />
              </button>
              <button className='next-btn' onClick={nextReviewHandler}>
                <FaChevronRight />
              </button>
            </div>
            <button className='random-btn' onClick={randomReviewHandler}>
              Surprise Me
            </button>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Review;
