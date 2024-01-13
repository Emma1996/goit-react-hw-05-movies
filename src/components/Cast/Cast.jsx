import React from 'react';
import styles from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <div>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
