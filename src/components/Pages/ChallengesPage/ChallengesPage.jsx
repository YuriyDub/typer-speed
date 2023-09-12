import { useEffect, useRef } from 'react';
import styles from './ChallengesPage.module.scss';
import Typed from 'typed.js';
import { Link, Outlet } from 'react-router-dom';

export const ChallengesPage = () => {
  return (
    <div className={styles.page}>
      <Outlet />
    </div>
  );
};

export const Challenges = () => {
  const titleElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(titleElement.current, {
      strings: ['Challenges'],
      showCursor: false,
      typeSpeed: 10,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <h2 ref={titleElement}></h2>
      <div className={styles.grid}>
        <Link to={'reaction-test'} relative="path" className={styles.challenge}>
          <h3>reaction test</h3>
          <img src="/img/background2.png" />
        </Link>
        <Link to={'accuracy-test'} relative="path" className={styles.challenge}>
          <h3>accuracy test</h3>
          <img src="/img/background3.png" />
        </Link>
        <Link to={'reaction-test'} relative="path" className={styles.challenge}>
          <h3>reaction test</h3>
          <img src="/img/background3.png" />
        </Link>
        <Link to={'reaction-test'} relative="path" className={styles.challenge}>
          <h3>reaction test</h3>
          <img src="/img/background4.png" />
        </Link>
      </div>
    </>
  );
};
