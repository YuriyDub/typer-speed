import Typed from 'typed.js';
import styles from './HomePage.module.scss';
import { useEffect, useRef } from 'react';

export const HomePage = () => {
  const titleElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(titleElement.current, {
      strings: [
        'Transform your typing routine into an exhilarating adventure that challenges your speed limits and refines your accuracy.',
      ],
      showCursor: false,
      typeSpeed: 10,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.page}>
      <h1 ref={titleElement} className={styles.title}></h1>
      <img src="/img/pngwing.com.png" />
    </div>
  );
};
