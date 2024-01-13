// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.headerLink}>
            <Link to="/">Home</Link>
          </li>
          <li>The Movie Database</li>
          <li className={styles.headerLink}>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
