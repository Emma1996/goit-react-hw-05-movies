import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul className={styles.reviewsList}>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
