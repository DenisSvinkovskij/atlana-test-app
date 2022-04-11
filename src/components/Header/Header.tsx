import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLink}>
        GitHub Searcher
      </Link>
    </header>
  );
};
