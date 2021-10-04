import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const currentPerson = 0;
  const [person, setPerson] = useState(people[currentPerson]);

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
              <img
                src={person.image}
                alt={person.image}
                className='person-img'
              />
              <span className='quote-icon'>
                <FaQuoteRight />
              </span>
            </div>
            <h3 className='author'>{person.name}</h3>
            <p className='job'>{person.job}</p>
            <p className='info'>{person.text}</p>
            <div className='btn-container'>
              <button className='prev-btn'>
                <FaChevronLeft />
              </button>
              <button className='next-btn'>
                <FaChevronRight />
              </button>
            </div>
            <button className='random-btn'>Surprise Me</button>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Review;
